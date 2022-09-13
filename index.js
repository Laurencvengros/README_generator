const inquirer = require('inquirer');

const generateContent = ({ title, description, contents, installation, usage, license, contributors, tests, gitHub, email}) =>
 ` ## ${answers.title}

 ## Description
 ${answers.description}

 ## Table of Contents
 * [Installation] (#Installation)
 * [Usage] (#Usage)
 * [License] (#License)
 * [Contributors] (#Contributors)
 * [Tests] (#Tests)
 * [Questions] (#Questions)
 

 ${answers.contents}

 ## Installation
 ${answers.installation}

 ## Usage
 ${answers.usage}

 ## License
 ${answers.license}

 ## Contributors
 ${answers.contributors}

 ## Tests
 ${answers.tests}

 ## Questions

 For any other questions, you may contact me via GitHub (https://github.com/${answers.gitHub})
 or via email at ${answers.email}

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
