// function to generate markdown for README
// const questions = require('../../index.js')

function generateMarkdown(data) {
  return ` 

 # ${data.title}  

 [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Description
  
 ${data.description}

 ## Table of Contents

 <details>
 <summary>Expand to view Table of Contents</summary>
 
  <p>
 
  1. [Documentation](#documentation)
      1. [Installation](#installation)
      2. [Usage](#usage)
      3. [Tests](#tests)
  2. [Contributing](#contributing)
  3. [Contact](#questions)
  4. [License](#licence)
 
 </p>
 </details>

## Documentation

### Installation 

${data.installation}

### Usage 

${data.usage}

### Tests 

${data.test}

## Contributing 

${data.contributing}

## Contact

If you have any questions about this project or would like to report a bug, please email ${data.email} 

## License 

This project is licensed under the following license:
\
${data.license}
- Find out more about this license and others at https://choosealicense.com/

`;
}

module.exports = generateMarkdown;
