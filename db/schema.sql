DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username  TEXT NOT NULL,
    email  TEXT NOT NULL,
    password  TEXT NOT NULL

);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    year INT NOT NULL,
    major TEXT NOT NULL

);
    



 