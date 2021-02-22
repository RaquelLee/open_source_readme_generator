const inquirer = require('inquirer');
const fs = require("fs");
const func = require('./utils/generateMarkdown');

const questions = [
    { 
        type: "input",
        message: "What is the title of your application?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description for your application:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions for your application:",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage instructions for your application:",
        name: "usage"
    },
    {
        type: "list", 
        message: "Choose a license from the following list for your project",
        name: "license",
        choices: [
            "none",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unilicense"
        ]
    },
    {
        type: "input",
        message: "Write instructions for those who would like to contribute to this project",
        name: "contributing"
    },
    {
        type: "input",
        message: "How do you run tests for your application?",
        name:"tests"
    },
    {
        type: "input",
        message: "Enter your email so users can contact you with questions:",
        name:"email"
    },
    {
        type: "input",
        message: "Enter your GitHub username so users can view your work:",
        name:"github"
    },
    {
        type: "input",
        message: "Enter your full name for copyright and licensing:",
        name:"name"
    }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("Success!");
    }
)};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();