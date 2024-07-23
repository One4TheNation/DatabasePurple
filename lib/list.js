const inquirer = require("inquirer");

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
                // write query to get departments 

                // console.table() values
                
                
            } else if (action === 'ADD_DEPARTMENTS') {
                
            } else if (action === 'ADD_DEPARTMENTS') {
                
            }

            this.run();
        });
    }
};

module.exports = List;