function renderLicenseBadge(license) {
    if (license !== "no license to display"){
        return `
![licence-badge](http://img.shields.io/badge/license-${license}-blue.svg)
        `;
    }else{
        return ' ';
    }
}


function renderLicenseLink(license) {
    if (license === "mozilla") {
        return `
[${license}](https://choosealicense.com/licenses/mpl-2.0/)
        `
    }else if( license === 'apache'){
        return `
[${license}](https://choosealicense.com/licenses/apache-2.0/)
        `
    }else if( license === 'mit'){
        return `
[${license}](https://choosealicense.com/licenses/mit/)
        `
    }else if( license === 'GNU'){
        return `
[${license}](https://choosealicense.com/licenses/agpl-3.0/)
        `
    }else if( license === 'no license'){
        return `
        no license to display
        `
    }
}


function renderLicenseSection(license) {
    if (license !== 'no license to display') {
        return `
        
The application is covered under the following license: ${license}
For more information about this license, click the link:${renderLicenseLink(license)}
          `;
        } else {
          return ' ';
        }
}



function generateMarkdown(data){
    return `
    
## ${data.title}

${renderLicenseBadge(data.license)}


${data.description}

Link to deployed site.(${data.url})

    

## Table-of-Contents
1. [Functionality](#functionality)

    -[User Story](#user-story)

    -[Acceptance Criteria](#acceptance-criteria)

    -[Screenshots](#screenshots)

1. [Installation](#installation)

2. [Usage](#usage)

3. [License](#license)

4. [Contributors](#contributors)

5. [Tests](#tests)

6. [Questions](#Questions)

    

## Functionality
${data.functionality}

---

## User Story


---

## Acceptance Criteria


---

## Screenshots


---

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