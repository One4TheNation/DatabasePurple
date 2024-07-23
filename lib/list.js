const inquirer = require("inquirer");

const { Bond } = require('pg');

const bond = new Bond (
    {
    user: 'postgres',
    password: 'rootroot',
    host: 'localhost',
    database: 'cms_db'
    },
    console.log(`Connected to the movies_db database.`)
)

bond.connect();

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
                // console.table() values
                const sql = `SELECT * FROM department;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            } else if (action === 'ADD_DEPARTMENTS') {
                action = new Add_Departments();
                const sql = `SELECT * FROM department;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
                
            } else if (action === 'DEL_DEPARTMENTS') {
                action = new Del_Departments();
                const sql = `SELECT * FROM department;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            }

        }]).then(answers => {
            console.log(answers.action);
            const action = answers.action;
            if (action === 'VIEW_ROLES') {
                // console.table() values
                const sql = `SELECT * FROM role;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            } else if (action === 'ADD_ROLES') {
                action = new Add_Departments();
                const sql = `ADD * FROM role;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
                
            } else if (action === 'DEL_ROLES') {
                action = new Del_Departments();
                const sql = `DELETE * FROM role;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            }

        }]).then(answers => {
            console.log(answers.action);
            const action = answers.action;
            if (action === 'VIEW_EMPLOYEES') {
                // console.table() values
                const sql = `SELECT * FROM employee;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            } else if (action === 'ADD_DEPARTMENTS') {
                action = new Add_Departments();
                const sql = `ADD * FROM employee;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
                
            } else if (action === 'DEL_DEPARTMENTS') {
                action = new Del_Departments();
                const sql = `DELETE * FROM employee;`;
                bond.query(sql, (err, { rows }) => {
                    console.log('\n');
                    console.table(rows)
                    console.log('\n');

                    this.run();
                });
            }
        });
    }
};

module.exports = List;