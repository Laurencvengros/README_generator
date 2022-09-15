const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = () =>{
        return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter ther title of your project"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief description for your project"
    },
    {
        type: "input",
        name: "functionality",
        message: "Enter the details describing what your project is used for"
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
            "apache",
            "GNU",
            "Mozilla",
            "mit",
            "no license"
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
        name: "gitHub",
        message: "Enter your GitHib username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address for people to contact you"
    },
    {
        type: "input",
        name: "url",
        message: "Enter the URL for the live site",
      },
]);
}


const writeToFile = data => {
    return new Promise((resolve, reject) =>{
    fs.writeFile( 'README.md', data, err =>{
            if(err){
                reject (err);
                return;
            }
                resolve({
                ok: true,
                message: console.log("README successfully created!")
            });
        })

    })
}

const init = () =>{
    return questions();
}

init()
.then(answers =>{
    return generateMarkdown(answers);
})
.then(readmeData => {
    return writeToFile(readmeData);
})
.catch(err =>{
    console.log(err);
})


