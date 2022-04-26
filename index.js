const fs = require("fs");
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const managerQuestions = [
        {
            message: "What is the team manager's name?",
            type: "input",
            name: "managersname",
        },
        {
            message: "What is the team manager's id?",
            type: "input",
            name: "managersid",
        },
        {
            message: "What is the manager's email?",
            type: "input",
            name: "managersemail",
        },
        {
            message: "What is the manager's office number?",
            type: "input",
            name:"managersofficenum"
        },
        {
            message: "Which type of team member would you like to add?",
            type: "list",
            name:"teammemberswitch",
            choices: ["Engineer", "Employee", "Intern", "I dont want to add anymore team members"]
        }
    

] 

const engineerQuestions = [
    {
        message: "What is your engineer's name?",
        type: "input",
        name: "engineersname",
    },
    {
        message: "What is your engineer's id?",
        type: "input",
        name: "engineersid",
    },
    {
        message: "What is your engineer's email?",
        type: "input",
        name: "engineersemail",
    },
    {
        message: "What is your engineer's GitHub username?",
        type: "input",
        name:"engineersgithub"
    },
    {
        message: "Which type of team member would you like to add?",
        type: "list",
        name:"teammemberswitch",
        choices: ["Engineer", "Employee", "Intern", "I dont want to add anymore team members"]
    }


] 

const internQuestions = [
    {
        message: "What is your intern's name?",
        type: "input",
        name: "internsname",
    },
    {
        message: "What is your intern's id?",
        type: "input",
        name: "internsid",
    },
    {
        message: "What is your intern's email?",
        type: "input",
        name: "internsemail",
    },
    {
        message: "What is your intern's school?",
        type: "input",
        name:"internsschool"
    },
    {
        message: "Which type of team member would you like to add?",
        type: "list",
        name:"teammemberswitch",
        choices: ["Engineer", "Employee", "Intern", "I dont want to add anymore team members"]
    }

] 


.then((data) => {
    console.log(data);
    // const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile("generate.html", JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log('success!')
    );
});


