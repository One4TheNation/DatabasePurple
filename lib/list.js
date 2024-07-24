const inquirer = require("inquirer");

const { Pool } = require('pg');

const pool = new Pool (
    {
        user: 'postgres',
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
                    value: 'VIEW_ROLES'
                },
                {
                    name: 'Add Role(s)',
                    value: 'ADD_ROLES'
                },
                {
                    name: 'Delete Role(s)',
                    value: 'DEL_ROLES'
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
                const sql = `SELECT * FROM department;`;
                pool.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            } else if (action === 'VIEW_ROLES') {
                const sql = `SELECT * FROM role;`;
                pool.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            } else if (action === 'VIEW_EMPLOYEES') {
                const sql = `SELECT * FROM employee;`;
                pool.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
                
            }
        });
    }
}


module.exports = List;