-- Drops the employees_db if it exists --
DROP DATABASE IF EXISTS; 

-- Creates the "employees_db" database --
CREATE DATABASE employees_db;

-- Declaring use of database --
USE employees_db;

-- Creating the tables "department", "roles", and "employee", with employees_db database --
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL
    );

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
);

SELECT employee.first_name, employee.last_name, roles.title, roles.salary, department.departmentName
FROM ((role
INNER JOIN employee ON roles.id = employee.roles.id)
INNER JOIN department ON roles.department_id = department_id)
ORDER BY departmentName;