// function to generate markdown for README
// const questions = require('../../index.js')

function generateMarkdown(data) {
  return ` 

 # ${data.title}  

 [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)

 ${data.license}


  ## Description
  
  ${data.description}

 <details>
 <summary>Table of Contents</summary>

 <p>
 - [Installation](#installation)
 - [Usage]](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

</p>
</details>

## Installation 

${data.installation}

## Usage 

${data.usage}

## Contributing 

${data.contributing}

## Tests 

${data.test}

## Questions

If you have any questions about this project or would like to report a bug, please email ${data.email} 

## License 

The following licenses were used for this project: 

\
${data.license}
- Find out more about this license and others at https://choosealicense.com/

`;
}

module.exports = generateMarkdown;
