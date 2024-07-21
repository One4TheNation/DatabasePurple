const inquirer = require("inquirer");

class List {
    run() {

        inquirer.prompt([
            {
                type: 'list',
                name: 'Text',
                message: 'Department(s)'
            },
            {
                type: 'list',
                name: 'Text',
                message: 'Role(s)'
            },
            {
                type: 'list',
                name: 'Text',
                message: 'Employees(s)'
            }, 

            ]).then(show => {
        }
    }
};