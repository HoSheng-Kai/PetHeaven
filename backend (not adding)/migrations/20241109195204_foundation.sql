-- Add migration script here
CREATE TABLE IF NOT EXISTS pets (
    name varchar(20) PRIMARY KEY,
    species varchar(4) NOT NULL,
    description varchar(250),
    availability boolean NOT NULL
)