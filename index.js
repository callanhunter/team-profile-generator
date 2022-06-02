const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Mananger");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const team = [];
const generatehtml = require("./generatehtml");

// TODO: Create an array of questions for user input
const managerQuestions = [
  {
    message: "What is the team manager's name?",
    type: "input",
    name: "name",
  },
  {
    message: "What is the team manager's id?",
    type: "input",
    name: "id",
  },
  {
    message: "What is the manager's email?",
    type: "input",
    name: "email",
  },
  {
    message: "What is the manager's office number?",
    type: "input",
    name: "officenum",
  },
  {
    message: "Which type of team member would you like to add?",
    type: "list",
    name: "teammemberswitch",
    choices: [
      "Engineer",
      "Manager",
      "Intern",
      "I dont want to add anymore team members",
    ],
  },
];

const engineerQuestions = [
  {
    message: "What is your engineer's name?",
    type: "input",
    name: "name",
  },
  {
    message: "What is your engineer's id?",
    type: "input",
    name: "id",
  },
  {
    message: "What is your engineer's email?",
    type: "input",
    name: "email",
  },
  {
    message: "What is your engineer's GitHub username?",
    type: "input",
    name: "github",
  },
  {
    message: "Which type of team member would you like to add?",
    type: "list",
    name: "teammemberswitch",
    choices: [
      "Engineer",
      "Manager",
      "Intern",
      "I dont want to add anymore team members",
    ],
  },
];

const internQuestions = [
  {
    message: "What is your intern's name?",
    type: "input",
    name: "name",
  },
  {
    message: "What is your intern's id?",
    type: "input",
    name: "id",
  },
  {
    message: "What is your intern's email?",
    type: "input",
    name: "email",
  },
  {
    message: "What is your intern's school?",
    type: "input",
    name: "school",
  },
  {
    message: "Which type of team member would you like to add?",
    type: "list",
    name: "teammemberswitch",
    choices: [
      "Engineer",
      "Employee",
      "Intern",
      "I dont want to add anymore team members",
    ],
  },
];

function createTeam() {
  const htmlData = generatehtml(team);
  fs.writeFileSync("index.html", htmlData);
}

function memberSwitch(choice) {
  console.log("choice" + choice);
  switch (choice) {
    case "Engineer":
      engineerQ();
      break;
    case "Intern":
      internQ();
      break;
    default:
      createTeam();
  }
}

function managerQ() {
  inquirer.prompt(managerQuestions).then((data) => {
    const tempManager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officenum
    );
    team.push(tempManager);
    memberSwitch(data.teammemberswitch);
  });
}

function engineerQ() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const temp = new Engineer(data.name, data.id, data.email, data.github);
    team.push(temp);
    memberSwitch(data.teammemberswitch);
  });
}

function internQ() {
  inquirer.prompt(internQuestions).then((data) => {
    const temp = new Intern(data.name, data.id, data.email, data.school);
    team.push(temp);
    memberSwitch(data.teammemberswitch);
  });
}

managerQ();
