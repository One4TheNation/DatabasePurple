DROP DATABASE IF EXISTS cms_db;

CREATE DATABASE cms_db;

\c cms_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    section INTEGER NOT NULL, 
    name VARCHAR(30) UNIQUE NOT NULL,
)


CREATE TABLE title_role (
    id SERIAL PRIMARY KEY,
    section INTEGER NOT NULL,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL, 
    department_id INTEGER NOT NULL, 
);


CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    section INTEGER NOT NULL,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
)

