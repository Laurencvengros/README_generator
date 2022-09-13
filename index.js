const inquirer = require('inquirer');
const fs = require("fs");

const questions = ({ title, description, contents, installation, usage, license, contributors, tests, gitHub, email}) =>
 ` ## ${title}

 ## Description
 ${description}

 ## Table of Contents
 * [Installation] (#installation)
 * [Usage] (#usage)
 * [License] (#license)
 * [Contributors] (#contributors)
 * [Tests] (#tests)
 * [Questions] (#Questions)
 

 ${contents}

 ## Installation
 ${installation}

 ## Usage
 ${usage}

 ## License
 ${license}

 ## Contributors
 ${contributors}

 ## Tests
 ${tests}

 ## Questions

 For any questions, you may contact me via GitHub (https://github.com/${gitHub})
 or via email at ${email}

 `

inquirer
.prompt([
    {
        type: "input",
        name: "title",
        Message: "Enter ther title of your project"
    },
    {
        type: "input",
        name: "description",
        Message: "Enter a description for your project"
    },
    {
        type: "input",
        name: "installation",
        Message: "describe the installation process of your application"
    },
    {
        type: "input",
        name: "usage",
        Message: "What is your application used for?"
    },
    {
        type: "list",
        name: "license",
        Message: "Choose a license for your application",
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
        Message: "Who coontributed to this application?"
    },
    {
        type: "input",
        name: "tests",
        Message: "Enter any instructions for testing tyhis application"
    },
    {
        type: "input",
        name: "userName",
        Message: "Enter your GitHib username"
    },
    {
        type: "input",
        name: "userEmail",
        Message: "Enter your email address for people to contact you"
    },
])
.then((answers) => {
    const generateREADME = questions(answers);

    fs.writeFile('README.md', generateREADME, (err) =>
    err ? console.log(err) : console.log("README created sucessfully!")
    );
});