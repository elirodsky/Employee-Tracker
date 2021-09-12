USE employees_db;

INSERT INTO department (departmentName)
VALUES ("Human Resources");

INSERT INTO department (departmentName)
VALUES ("Accounting");

INSERT INTO department (departmentName)
VALUES ("Management");

INSERT INTO department (departmentName)
VALUES ("Legal");


INSERT INTO roles (title, salary, department_id)
VALUES ('HR Manager', 75, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('HR Director', 100, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('Auditor', 110, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ('Controller', 120, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ('Project Manager', 125, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ('Product Manager', 115, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ('Legal Analyst', 118, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ('General Counsel', 250, 4);


INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Johnny", "Appleseed", 1);