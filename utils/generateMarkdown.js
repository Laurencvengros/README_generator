function renderLicenseBadge(license) {
    if (license !== "no license to display"){
        return `
        ![badge](https://img.shields.io/badge/license-${license}-blue)
        `;
    }else{
        return ' ';
    }
}


function renderLicenseLink(license) {
    if (license !== 'no license to display') {
        return `
        [${license}](https://choosealicense.com/licenses/${license})
        `
    }else{
        return ' ';
    }
}


function renderLicenseSection(license) {
    if (license !== 'no license to display') {
        return `
        ## [License](#table-of-contents)
        The application is covered under the following license:
        ${renderLicenseLink(license)}
          `;
        } else {
          return ' ';
        }
}



function generateMarkdown(data){
    return `
    
    ## ${data.title}

    ## Description
        ${data.description}

    

    ## Table-of-Contents
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
    ${renderLicenseBadge(data.license)}
    ${renderLicenseSection(data.license)}

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