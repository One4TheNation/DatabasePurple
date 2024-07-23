const inquirer = require("inquirer");

const { Pool } = require('pg');

// Connect to database
const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'rootroot',
      host: 'localhost',
      database: 'cms_db'
    },
    console.log(`Connected to the movies_db database.`)
  )
  
pool.connect();

class List {
    run() {
        inquirer.prompt([{
            type: "list",
            message: "Welcome to the VSU Business Database",
            name: 'action',
            choices: [
                {
                    name: 'View Department(s)',
                    value: 'VIEW_DEPARTMENTS'
                },
                {
                    name: 'Add Department(s)',
                    value: 'ADD_DEPARTMENTS'
                },
                {
                    name: 'Delete Department(s)',
                    value: 'DEL_DEPARTMENTS'
                },
                {
                    name: 'View Role(s)',
                    value: 'VIEW_DEPARTMENTS'
                },
                {
                    name: 'Add Role(s)',
                    value: 'ADD_DEPARTMENTS'
                },
                {
                    name: 'Delete Role(s)',
                    value: 'DEL_DEPARTMENTS'
                },
                {
                    name: 'View Employee(s)',
                    value: 'VIEW_EMPLOYEES'
                },
                {
                    name: 'Add Employee(s)',
                    value: 'ADD_EMPLOYEES'
                },
                {
                    name: 'Delete Employee(s)',
                    value: 'DEL_EMPLOYEES'
                },
                
            ]
        }]).then(answers => {
            console.log(answers.action);
            const action = answers.action;
            if (action === 'VIEW_DEPARTMENTS') {
                // console.table() values
                const sql = `SELECT * FROM department;`;
                pool.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            } else if (action === 'ADD_DEPARTMENTS') {
                action = new Add_Departments();
                
            } else if (action === 'DEL_DEPARTMENTS') {
                action = new Del_Departments();
                
            }
        });
    }
};

module.exports = List;