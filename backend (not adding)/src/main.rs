// postgres://username:password@localhost:3306/database_name

// mod postgres;
use axum::{
    http::{header::CONTENT_TYPE, HeaderValue, Method},
    routing, Json, Router,
};
use sqlx::postgres::PgPoolOptions;
use std::net::SocketAddr;
use std::time::Duration;
// use crate::postgres::{rest_router, AppState};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();

    // DB stuff
    let db_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let pool = PgPoolOptions::new()
        .max_connections(20)
        .max_lifetime(Duration::from_secs(3600))
        .connect(&db_url)
        .await?;

    sqlx::migrate!("./migrations").run(&pool).await?;

    // Server stuff
    let routes = Router::new()
        .route("/", routing::get(test))
        .with_state(pool);

    let addr = SocketAddr::from(([127, 0, 0, 1], 8000));

    axum::Server::bind(&addr)
        .serve(routes.into_make_service())
        .await
        .unwrap();

    Ok(())
}

async fn test() -> Json<String> {
    Json(String::from("This is working."))
}

// #[derive(serde::Serialize)]
// struct Message {
//     message: String,
// }

// async fn handler() -> Json<Message> {
//     Json(Message {
//         message: format!("Hello, World!"),
//     })
// }
