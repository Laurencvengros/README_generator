const inquirer = require('inquirer');
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown")

const questions =
[
    {
        type: "input",
        name: "title",
        message: "Enter ther title of your project"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project"
    },
    {
        type: "input",
        name: "installation",
        message: "describe the installation process of your application"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your application used for?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application",
        choices: [
            "Apache",
            "Boost",
            "GNU",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Who coontributed to this application?"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any instructions for testing tyhis application"
    },
    {
        type: "input",
        name: "userName",
        message: "Enter your GitHib username"
    },
    {
        type: "input",
        name: "userEmail",
        message: "Enter your email address for people to contact you"
    },
]
function init(){
    inquirer.prompt(questions).then(function(answers){

    const generateREADME = generateMarkdown(answers);

    fs.writeFile('README.md', generateREADME, (err) =>
    err ? console.log(err) : console.log("README created sucessfully!")
    );
}
)};

init();