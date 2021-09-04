-- Drops the employees_db if it exists --
DROP DATABASE IF EXISTS; 

-- Creates the "employees_db" database --
CREATE DATABSE employees_db;

-- Declaring use of database --
USE employees_db;

-- Creating the tables "department", "role", and "emplyee", with employees_db database --
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id NOT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
)