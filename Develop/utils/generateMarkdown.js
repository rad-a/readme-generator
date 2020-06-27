// function to generate markdown for README
// const questions = require('../../index.js')

function generateMarkdown(data) {
  return ` 
  # ${data.title} [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/${data.username}.github.io/${data.title}.svg)](http:///${data.username}.github.io/dog-date/) [![GitHub last commit](https://img.shields.io/github/last-commit//${data.username}/${data.title})
](https://github.com//${data.username}/${data.title}/graphs/commit-activity) [![GitHub contributors](https://img.shields.io/github/contributors//${data.username}/${data.title})](https://github.com//${data.username}/${data.title}/graphs/contributors)

 ${data.license}


  ## Description
  
  ${data.description}

 <details>
 <summary>Table of Contents</summary>

 <p>
 If your content is not too long, you can delete this section. 

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

## License 

${data.license}


## Contributing 

${data.contributing}

## Tests 

${data.test}

## Questions

If you have any questions or spot a bug, please reach out to ${data.email} 


`;
}

module.exports = generateMarkdown;
