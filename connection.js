const mysql = require('mysql');
const inquirer = require ('inquirer');

//establishing connection to sql databse
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'c1h2u3c4k5',
    database: 'employees_db'
});

connection.connect((err) => {
  if (err) throw err;
  runSearchDirectory();
  });

const runSearchDirectory = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'View Company Directory:',
        choices: [
          'Find a department:',
          'Find employee positions:',
          'Find employee names:',
          'Exit',
        ],
    })   
    .then((answer) => {
        switch (answer.action) {
          case 'Find a department:':
            departmentSearch();
            break;

          case 'Find employee positions:':
            roleSearch();
            break;

          case 'Find employee names:':
            employeeSearch();
            break;

          case 'Exit':
            connection.end();
            break;

          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
    });
  };
  
  const departmentSearch = () => {
    inquirer
      .prompt({
        name: 'departmentName',
        type: 'list',
        message: 'Find a department:',
        choices: ['Human Resources', 'Accounting', 'Management'],
      })
      .then((answer) => { 
        const query = 'SELECT id, departmentName FROM department WHERE ?'; 
        connection.query(query, { departmentName: answer.departmentName }, (err, res) => {
        if (err) throw err;
        res.forEach(({ id, departmentName }) => {
          console.log(
            `ID: ${id} || Department: ${departmentName}`
            );
          });  
        runSearchDirectory();
      });
    });
  };

  const roleSearch = () => {
    inquirer
      .prompt({
        name: 'title',
        type: 'list',
        message: 'Find employee positions:',
        choices: ['HR Manager', 'HR Director', 'Auditor', 'Controller', 'Project Manager', 'Legal Analyst', 'General Counsel', 'Null'],
    }) 
    .then((answer) => { 
      const query = 'SELECT id, title, salary, department_id FROM roles WHERE ?';
      connection.query(query, { title: answer.title }, (err, res) => {
        if (err) throw err;
      res.forEach(({ id, title, salary, department_id }) => {
          console.log(
            `ID: ${id} || Title: ${title} || Salary: ${salary} || Department ID: ${department_id}`
          );
        });
        runSearchDirectory();
      });
    });
  };  

  const employeeSearch = () => {
    inquirer
      .prompt({
        name: 'last_name',
        type: 'list',
        message: 'Find employee names:',
        choices: ['Appleseed', 'McKnobloch', 'Sandler', 'Rollins', 'Marshall', 'House', 'Crenshaw', 'Hunter'],
    })   
    .then((answer) => {
      const query = 'SELECT id, first_name, last_name, role_id, manager_id FROM employee WHERE ?';
      connection.query(query, { last_name: answer.last_name }, (err, res) => {
        if (err) throw err;
      res.forEach(({ id, first_name, last_name, role_id, manager_id }) => {
          console.log(
            `ID: ${id} || First Name: ${first_name} || Last Name: ${last_name} || Role ID: ${role_id} || Manager ID: ${manager_id}`
        );
        });
        runSearchDirectory();   
      });
  });
};