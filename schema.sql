-- Drops the employees_db if it exists --
DROP DATABASE IF EXISTS; 

-- Creates the "employees_db" database --
CREATE DATABSE employees_db;

-- Declaring use of database --
USE employees_db;

-- Creating the tables "department", "role", and "emplyee", with employees_db database --
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(30) NOT NULL
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

INSERT INTO department (departmentName) values ('Human Resources');
INSERT INTO department (departmentName) values ('Accounting');
INSERT INTO department (departmentName) values ('Management');
INSERT INTO department (departmentName) values ('Legal');

INSERT INTO roles (title, salary, department_id) values ('HR Manager', 75000, 1);
INSERT INTO roles (title, salary, department_id) values ('HR Director', 100000, 1);
INSERT INTO roles (title, salary, department_id) values ('Auditor', 110000, 2);
INSERT INTO roles (title, salary, department_id) values ('Controller', 120000, 2);
INSERT INTO roles (title, salary, department_id) values ('Project Manager', 125000, 3);
INSERT INTO roles (title, salary, department_id) values ('Product Manager', 115000, 3);
INSERT INTO roles (title, salary, department_id) values ('Legal Analyst', 118000, 4);
INSERT INTO roles (title, salary, department_id) values ('General Counsel', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Johnny', 'Appleseed', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Chucky', 'McKnobloch', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Bertha', 'Sandler', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Henry', 'Rollins', 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Penny', 'Marshall', 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Hellen', 'House', 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Leonard', 'Crenshaw', 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Joe', 'Hunter', 8, NULL);
