// // array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
// const validateEmail = require("email-validator");
// const questionFile = require('./questions.js');
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Title for your README:",
    validate: function (text) {
      if (text.trim().length < 1) {
        return "You must enter a title for your document.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please write a description for your README:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "content",
    message: "If your README is very long, please add a Table of Content:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation notes:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "usage",
    message: "Enter instructions for using your application:",
    validate: validateInput,
  },
  {
    type: "list",
    name: "license",
    message: "License:",
    choices: ["MIT", "ODbL", "Mozilla"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Instructions for contributing to your project:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "test",
    message: "Please explain testing procedures and enter any testing code:",
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

function validateInput(value) {
  if (value.length < 1) {
    return "Please enter a valid description.";
  }
  return true;
}

inquirer.prompt(questions).then(function (answer) {
  console.log("these r our answers", answer);
  switch (answer.license) {
    case "MIT":
      console.log("GET THE MIT LINK!!");
      answer.license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      console.log("GET THE Mozila LINK!!");
      answer.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
      break;
    case "ODbL":
      console.log("GET THE OPEN LINK!!");
      answer.license = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]";
      break;
  }

  var readmeText = generateMarkdown(answer);

  console.log("read me text working ??", readmeText);
  fs.writeFile("readme.md", readmeText, "utf8", function (err) {
      if(err) {
    console.log("err ??", err);
      } return true;
  });
});

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

// Function to validate user input

module.exports = questions;
