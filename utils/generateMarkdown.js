function generateMarkdown(data){
    return `
    
    ## ${data.title}

    ## Description
        ${data.description}

    ## Table of Contents
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributors] (#contributors)
    * [Tests] (#tests)
    * [Questions] (#Questions)
 

       

    ## Installation
        ${data.installation}

    ## Usage
        ${data.usage}

    ## License
        ${data.license}

    ## Contributors
        ${data.contributors}

    ## Tests
        ${data.tests}

    ## Questions

    For any questions, you may contact me via GitHub (https://github.com/${data.gitHub})
    or via email at ${data.email}

 `;
}

module.exports = generateMarkdown;