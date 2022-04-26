// const fs = require("fs");
// const inquirer = require("inquirer");


// // TODO: Create an array of questions for user input
// const managerQuestions = [
//         {
//             message: "What is the team manager's name?",
//             type: "input",
//             name: "mangersname",
//         },
//         {
//             message: "What is the team manager's id?",
//             type: "input",
//             name: "managersid",
//         },
//         {
//             message: "What is the manager's email?",
//             type: "input",
//             name: "managersemail",
//         },
//         {
//             message: "What is the manager's office number?",
//             type: "input",
//             name:"managersofficenum"
//         }

// ] 

// const engineerQuestions = [
//     {
//         message: "What is your engineer's name?",
//         type: "input",
//         name: "engineersname",
//     },
//     {
//         message: "What is your engineer's id?",
//         type: "input",
//         name: "engineersid",
//     },
//     {
//         message: "What is your engineer's email?",
//         type: "input",
//         name: "engineersemail",
//     },
//     {
//         message: "What is your engineer's GitHub username?",
//         type: "input",
//         name:"engineersgithub"
//     }

// ] 

// const internQuestions = [
//     {
//         message: "What is your intern's name?",
//         type: "input",
//         name: "internsname",
//     },
//     {
//         message: "What is your intern's id?",
//         type: "input",
//         name: "internsid",
//     },
//     {
//         message: "What is your intern's email?",
//         type: "input",
//         name: "internsemail",
//     },
//     {
//         message: "What is your intern's school?",
//         type: "input",
//         name:"internsschool"
//     }

// ] 



// // {
// //     message: "Which type of team member would you like to add?",
// //     type: "list",
// //     name:""
// //     choices: ["Engineer", "Employee", "Intern", "I dont want to add anymore team members"]
// // }




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err) {
//         console.log(fileName)
//         console.log(data)
//         if (err) {
//             return console.log(err)
//         } else {
//             console.log("success!!")
//         }
//     })
// }   

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then(function(data) {
//             writeToFile("generate.html", (data));
//             console.log(data)
//         })
// }

// // Function call to initialize app
// init()
