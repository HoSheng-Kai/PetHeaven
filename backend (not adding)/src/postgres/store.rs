use serde::{Deserialize, Serialize};
use sqlx::{query_as, PgPool};

#[derive(Clone)]
pub(crate) struct Store {
    pool: PgPool,
}

#[derive(Clone, Serialize, Deserialize)]
pub(crate) struct Pet {
    pub name: String,
    pub species: String,
    pub description: String,
    pub availability: bool,
}

impl Store {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn get_pets(&self) -> Result<Vec<Pet>, sqlx::Error> {
        query_as!(
            Pet,
            r#"--sql
            select * from pets
            "#
        )
        .fetch_all(&self.pool)
        .await
    }

    pub async fn add_pet(&self, pet: Pet) -> Result<Pet, sqlx::Error> {
        
    }
}
