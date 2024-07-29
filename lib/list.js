const inquirer = require("inquirer");

const { Pool } = require('pg');

const pool = new Pool(
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
            } else if (action === 'VIEW_ROLES') {
                const sql = `SELECT * FROM title_roles;`;
                pool.query(sql, (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    };
                    console.log('\n');
                    console.table(data.rows)
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
                    pool.query(sql, params, (err, { rows }) => {
                        console.log('\n');
                        console.log('Department Added')
                        console.log('\n');

                        this.run();
                    });
                });
            } else if (action === 'ADD_ROLES') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'title',
                    message: 'Role Title'
                },
                {
                    name: 'salary',
                    message: 'Role Salary',
                    type: 'input'
                },
                {
                    name: 'department_id',
                    message: 'Department ID',
                    type: 'input'
                }]).then((data) => {
                    const sql = `INSERT INTO title_roles (title, salary, department_id) VALUES ($1, $2, $3);`;
                    const params = [data.title, +data.salary, +data.department_id];
                    pool.query(sql, params, (err, { rows }) => {
                        console.log('\n');
                        console.log('Added Successfully')
                        console.log('\n');

                        this.run();
                    });
                });

            } else if (action === 'ADD_EMPLOYEES') {
                inquirer.prompt([{
                    name: 'first_name',
                    message: 'Forename',
                    type: 'input',
                },
                {
                    name: 'last_name',
                    message: 'Surname',
                    type: 'input'
                },
                {
                    name: 'role_id',
                    message: 'Role ID',
                    type: 'input'
                },
                {
                    name: 'manager_id',
                    message: 'Manager ID',
                    type: 'input'
                }]).then((data) => {
                    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4);`;
                    const params = [data.first_name, data.last_name, data.role_id, data.manager_id];
                    pool.query(sql, params, (err, { rows }) => {
                        console.log('\n');
                        console.log('Added Successfully')
                        console.log('\n');

                        this.run();
                    });
                });

            } else if (action === 'DEL_EMPLOYEES') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'id',
                    message: 'Do you want to delete employee? Please enter employee id.'
                }]).then((data) => {
                    const sql = `DELETE FROM employee WHERE id = $1;`;
                    const params = [data.id];
                    pool.query(sql, params, (err, { rows }) => {
                        console.log('\n');
                        console.log('Deleted Successfully')
                        console.log('\n');

                        this.run();
                    });
                });

            } else if (action === 'DEL_DEPARTMENTS') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'id',
                    message: 'Do you want to delete department? Please enter department id.'
                }]).then((data) => {
                    const sql = `DELETE FROM department WHERE id = $1;`;
                    const params = [data.id];
                    pool.query(sql, params, (err, { rows }) => {
                        console.log('\n');
                        console.log('Deleted Successfully')
                        console.log('\n');

                        this.run();
                    });
                });
            } else if (action === 'DEL_ROLES') {
                inquirer.prompt([{
                    type: 'input',
                    name: 'id',
                    message: 'Do you want to delete role? Please enter role id.'
                }]).then((data) => {
                    const sql = `DELETE FROM title_roles WHERE id = $1;`;
                    const params = [data.id];
                    pool.query(sql, params, (err, { rows }) => {
                        console.log('\n');
                        console.log('Deleted Successfully')
                        console.log('\n');

                        this.run();
                    });
                });
            }
        });
    }
}


module.exports = List;