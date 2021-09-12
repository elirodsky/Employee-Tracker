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
      case 'Add another department':
        departmentAdd();
        break;

      case 'Add another role':
        roleAdd();
        break;

      case 'Add another employee':
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
};

getRoles = () => {
  connection.query('SELECT id, title FROM roles', (err, res) => {
      if (err) throw err;
  })
};

getDepartments = () => {
  connection.query('SELECT id, name FROM department', (err, res) => {
      if (err) throw err;
      departments = res;
  })
};

const departmentAdd = () => {
  inquirer
      .prompt({
          name: 'dept_name',
          type: 'input',
          message: 'Name of Department'
      })
      .then(function (answer) {
          connection.query('INSERT INTO department SET ?',
              {
                  departmentName: answer.departmentName
              },
              (err) => {
                  if (err) throw err;
                  console.log(`\ndepartment "${answer.name}" was sucessfully added.\n`)
              });
          runSearchDirectory();
      });
};

const roleAdd = () => {
  connection.query('SELECT * FROM department', (err, results) => {
      if (results.length === 0) {
          console.log('No departments exist. Add a department first');
          departmentAdd();
          return;
      }
      if (err) throw err;
      inquirer
          .prompt([
              {
                  name: 'choice',
                  type: 'rawlist',
                  message: 'What Department does Role belong to?',
                  choices() {
                      const choiceArray = [];
                      results.forEach(({ departmentName }) => {
                          choiceArray.push(departmentName);
                      });
                      return choiceArray;
                  },

              },

              {
                  name: 'title',
                  type: 'input',
                  message: 'Name of Role'
              },
              {
                  name: 'salary',
                  type: 'input',
                  message: 'Salary Amount:'
              },
              // add department selection
          ])
          .then(function (response) {
              const dept = response.choice;
              const newId = results.find(x => x.departmentName === dept).id;
              connection.query('INSERT INTO roles SET ?',
                  {
                      departmentName: newId,
                      title: response.title,
                      salary: response.salary
                  },
                  (err) => {
                      if (err) throw err;
                      console.log(`\nrole ${response.title} was successfully added.\n`)
                      runSearchDirectory();
                  });
          });
  });
};

const employeeAdd = () => {
  connection.query('SELECT * FROM roles', (err, results) => {
      if (results.length === 0) {
          console.log('No roles exist. Add a role first');
          roleAdd();
          return;
      }
      if (err) throw err;

      inquirer
          .prompt([{
              name: 'first_name',
              type: 'input',
              message: 'Employees First Name:'
          },
          {
              name: 'last_name',
              type: 'input',
              message: 'Employees Last Name:'
          },
          {
              name: 'choice',
              type: 'rawlist',
              message: 'What is Employees Role?',
              choices() {
                  const choiceArray = [];
                  results.forEach(({ title }) => {
                      choiceArray.push(title);
                  });
                  return choiceArray;
          },
        },

      ])
      // Finds employees chosen role with correct id
      .then(function (response) {
          const role = response.choice;
          const newId = results.find(x => x.title === role).id;

          connection.query('INSERT INTO employee SET ?',
              {
                  role_id: newId,
                  first_name: response.first_name,
                  last_name: response.last_name,

              },
              (err) => {
                  if (err) throw err;
                  console.log(`\nemployee ${response.first_name} ${response.last_name} was successfully added.\n`);
                  runSearchDirectory();
              });
      });
});
};