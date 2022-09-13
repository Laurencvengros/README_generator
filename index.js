const inquirer = require('inquirer');

const generateContent = ({ title, description, contents, installation, usage, license, contributors, tests, questions, gitHub, email}) =>
 ` ## ${answers.title}

 ## Description
 ${answers.description}

 ## Table of Contents
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
 ${answers.questions}

 For any other questions, you may contact me via GitHub (https://github.com/${answers.gitHub})
 or via email at ${answers.email}

 
 
 
 
 `