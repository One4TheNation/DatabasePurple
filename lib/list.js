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
            message: "Welcome to the Purple Business Database",
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
                    name: '----------',
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
                    name: '----------',
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
                {
                    name: '----------',
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
            } else if (action === 'VIEW_TITLE_ROLES') {
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

            } else if (action === 'ADD_DEPARTMENTS') {

                    inquirer.prompt([{
                        type: 'input',
                        name: 'name',
                        message: 'What is the department name?'
                    }]).then((data) => {
                        
                        const sql = `INSERT INTO department (name) VALUES ($1);`;
                        const params = [data.name];
    
                        pool.query(sql, params,(err, { rows }) => {
                            console.log('\n');
                            console.log('Department Added')
                            console.log('\n');
        
                            this.run();
                        });

                    } else if (action === 'ADD_TITLE_ROLES') {

                        inquirer.prompt([{
                            type: 'input',
                            name: 'title',
                            name: 'salary'
                            message: 'Add new role?'
                        }]).then((data) => {
                            
                            const sql = `INSERT INTO department (title) (salary) VALUES ($1);`;
                            const params = [data.title], [data.salary];
        
                            pool.query(sql, params,(err, { rows }) => {
                                console.log('\n');
                                console.log('Added Successfully')
                                console.log('\n');
            
                                this.run();
                            });
                            
                        });
                    });
                
            }
        });
    }
}


module.exports = List;