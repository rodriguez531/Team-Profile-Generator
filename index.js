const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
let empArr = []

const continueAdd = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'continue',
            message: 'Do you want to add another employee',
            choices: ['Engineer', 'Intern', 'No'],
        },
    ])
    .then(answers => {
        if (answers.continue === 'Engineer') {
            promptEngineer()
        } else if (answers.continue === "Intern"){
            internPrompt()
        } else {
            fs.writeFileSync('./dist/employees.html', 
            `
            <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
            `
            );
            for (let i = 0; i < empArr.length; i++) {
                fs.appendFileSync('./dist/employees.html', 
                `
                <div class="w3-card-4" style="width: 15%;">

            <header class="w3-container w3-blue">
              <h1>${empArr[i].name}</h1>
              <h3>role</h3>
            </header>
            
            <div class="w3-container">
              <p>ID: ${empArr[i].id} </p>
              <p>Email: ${empArr[i].email} </p>
              <p>${empArr[i].e}: ${empArr[i].e}</p>
            </div>
            </div>
                `)   
                
            };
    
            fs.appendFileSync('./dist/employees.html', 
            `
            </body>
    </html>
            `)
            process.exit(-1)
        }
    })
}

const promptManager = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'managername',
        message: 'what is your managers name',
    },
    {
        type: 'input',
        name: 'id',
        message: "what is the manager's ID",
    },
    {
        type: 'input',
        name: ' email',
        message: 'what is the managers email address',
    },
    {
        type: 'input',
        name: 'office',
        message: 'what is the manages office number',
    },
    ]) 
    .then(answers => {
        let manager = new Manager(answers.managername, answers.id, answers.email, answers.office)
        manager.e = answers.office
        manager.Qe = "Office number"
        empArr.push(manager)
        continueAdd()
    })

};

// The rest of the questions
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: 'what is the engineers name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the engineers id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the engineers email address'
        },
        {
            type: 'input',
            name: 'githubusername',
            message: 'what is the engineers Github username',
        },
    ])
    .then(answers => {
        let engineer = new Engineer(answers.engineername, answers.id, answers.email, answers.githubusername)
        engineer.e = answers.githubusername
        engineer.Qe = "GitHub"
        empArr.push(engineer)
        continueAdd()
    })
};

const internPrompt = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is the name of the intern',
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is the interns ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is the interns email address',
    },
    {
        type: 'input',
        name: 'school',
        message: 'what is the interns school',
    },
    ])
    .then(answers => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        intern.e = answers.school
        intern.Qe = "School"
        empArr.push(intern)
        continueAdd()
});
}
promptManager()
