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
                // {
                //     type: 'list',
                //     name: 'Text',
                //     message: 'Role(s)'
                // },
                // {
                //     type: 'list',
                //     name: 'Text',
                //     message: 'Employees(s)'
                // }, 
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