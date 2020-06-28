const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title for your project:",
    validate:validateInput
    },
  
  {
    type: "input",
    name: "description",
    message: "Description for your project:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "installation",
    message: "Instructions for installing your application:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for how to use your application. Add images when applicable.",
    validate: validateInput,
  },
  {
    type: "list",
    name: "license",
    message: "Select the license you would like to use for your project:",
    choices: ["MIT", "ODbL", "Mozilla"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can someone contribute to your project:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "test",
    message: "Please provide testing procedures and enter any testing code:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?",
    validate: validateInput,
  },

  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
    validate: validateInput,
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: function (email) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (valid) {
        return true;
      } else return "Please enter a valid email.";
    },
  },
];

// Function to initialize program
function init() {
  inquirer.prompt(questions).then(function (answer) {
    //License badge options

    switch (answer.license) {
      case "MIT":
        answer.license =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Mozilla":
        answer.license =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
        break;
      case "ODbL":
        answer.license =
          "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]";
        break;
    }

    // To write readme
    const readmeText = generateMarkdown(answer);

    fs.writeFile("readme.md", readmeText, "utf8", function (err) {
      if (err) {
        console.log("Something went wrong. Unable to generate README file at this time.", err);
      }
      return true;
    });
  });
}

//Function call to initialize program
init();

// Function to validate user input
function validateInput(value) {
  if (value.length < 1) {
    return "This cannot be blank. Please enter a valid input.";
  }
  return true;
}

module.exports = questions;
