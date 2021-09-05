const mysql = require('mysql');
const inquirer = require ('inquirer');

//establishing connection to sql databse
const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    
    password: "c1h2u3c4k5",
    
    database: "employees_db"
});

connection.connect((err) => {
   if (err) throw err;
   listSearch(); 
});

const listSearch = () => {
    inquirer
        .prompt({
            name: 'departmentName',
            type: 'list',
            message: 'Pick a company department:',
        })
        .then((answer) => {
            connection.query('SELECT * FROM department', (err, res) => {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.log(res);
                connection.end();
              });
        });
};

