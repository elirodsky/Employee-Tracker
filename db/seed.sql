use employees_db;

INSERT INTO department 
    (name)
VALUES 
    ('Human Resources');
    ('Accounting');
    ('Management');
    ('Legal');

INSERT INTO roles
    (title, salary, department_id)
VALUES 
    ('HR Manager', 75000, 1);
    ('HR Director', 100000, 1);
    ('Auditor', 110000, 2);
    ('Controller', 120000, 2);
    ('Project Manager', 125000, 3);
    ('Product Manager', 115000, 3);
    ('Legal Analyst', 118000, 4);
    ('General Counsel', 250000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ('Johnny', 'Appleseed', 1, NULL);
    ('Chucky', 'McKnobloch', 2, NULL);
    ('Bertha', 'Sandler', 3, NULL);
    ('Henry', 'Rollins', 4, NULL);
    ('Penny', 'Marshall', 5, NULL);
    ('Hellen', 'House', 6, NULL);
    ('Leonard', 'Crenshaw', 7, NULL);
    ('Joe', 'Hunter', 8, NULL);
