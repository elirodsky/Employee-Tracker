const { prompt } = require('inquirer');
const db = require('./db');
require('console.table');

async function loadMainPrompts(){
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
        {
          name: "View Employees",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "View Employees By Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
        },
        {
          name: "View Employees By Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER"
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES"
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]);

  switch (choice) {
    case "VIEW_EMPLOYEES":
      return viewEmployees();
    case "VIEW_EMPLOYEES_BY_DEPARTMENT":
      return viewEmployeesByDepartment();
    case "VIEW_EMPLOYEES_BY_MANAGER":
      return viewEmployeesByManager();
    case "VIEW_DEPARTMENTS":
      return viewDepartments();
    case "VIEW_ROLES":
      return viewRoles();
    default:
      return quit();
  }
}

async function viewEmployees() {
  const employees = await db.findAllEmployees();

  console.log("\n");
  console.table(employees);

  loadMainPrompts();
}

async function viewEmployeesByDepartment() {
  const departments = await db.findAllDepartments();

  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id
  }));

  const { departmentId } = await prompt([
    {
      type: "list",
      name: "departmentId",
      message: " In what department are you seeking employees?",
      choices: departmentChoices
    }
  ]);

  const employees = await db.findAllEmployeesByDepartment(departmentId);

  console.log("\n");
  console.table(employees);

  loadMainPrompts();
}

async function viewEmployeesByManager() {
  const managers = await db.findAllEmployees();

  const managerChoices = managers.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id
  }));

  const { managerId } = await prompt([
    {
      type: "list",
      name: "managerId",
      message: "Which employee employee reports do you want to see?",
      choices: managerChoices
    }
  ]);

  const employees = await db.findAllEmployeesByManager(managerId);

  console.log("\n");

  if (employees.length === 0) {
    console.log("The selected employee has no direct reports");
  } else {
    console.table(employees);
  }

  loadMainPrompts();
}

  async function viewRoles() {
  const roles = await db.findAllRoles();

  console.log("\n");
  console.table(roles);

  loadMainPrompts();
}

function quit() {
  console.log("Thank you!");
  process.exit();
}

