const mysql = require('mysql');
const inquirer = require ('inquirer');

//establishing connection to sql databse
const connection = mysql.createConnection({
    host: "localhost",

    user: "root",
    
    password: "c1h2u3c4k5",
    
    database: "employees_db"
});

