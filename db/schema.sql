DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username  TEXT NOT NULL,
    email  TEXT NOT NULL,
    password  TEXT NOT NULL

);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student NAME NOT NULL,
    Year INT NOT NULL,
    major TEXT NOT NULL
)




 