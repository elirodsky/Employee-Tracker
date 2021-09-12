const mysql = require('mysql');
const inquirer = require('inquirer');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  //Add start function
  runSearchDirectory();
})

const runSearchDirectory = () => {
  inquirer.prompt({
    name: 'main',
    type: 'list',
    message: 'What do you want to do?',
    choices: [
      'Add another department',
      'Add another role',
      'Add another employee',
      'Exit',
    ],
  })
  .then((answer) => {
    switch (answer.main){
      case 'Add a department':
        departmentAdd();
        break;

      case 'Add a role':
        roleAdd();
        break;

      case 'Add an employee':
        employeeAdd();
        break;

      case 'Exit':
        connection.end;
        console.log('Thank you!');
        break;

      default:
        console.log(`Invalid action: ${answer.action}`);
        break;
    }
  })
}