const inquirer = require("inquirer");
const api = require("./utils/api");
const path = require("path");
const fs  = require('fs');
const markDown = require("./utils/generateMarkdown")

const questions = [
    {
       type: "input",
       name: "username",
       message: "What is your Github username?"

    },

    {
      type: "input",
      name: "userEmail",
      message: "What is your e-mail address?"

   },

    {
        type: "input",
        name: "title",
        message: "What is the name of your app?"
 
     },

     {
      type: "input",
      name: "description",
      message: "Provide a description of the application"

   },

     {
        type: "input",
        name: "install",
        message: "How do you install the app?"
 
     },

     {
      type: "input",
      name: "tableOfContents",
      message: "What is your Table of Contents?"

   },

   {
      type: "input",
      name: "usage",
      message: "How is the app used?"

   },

   {
      type: "input",
      name: "contribution",
      message: "How can other developers contribute to the app?"

   },


   {
      type: "input",
      name: "tests",
      message: "What tests are run to resolve bugs/issues?"

   },

   {
      type: "input",
      name: "questions",
      message: "How can users report issues or ask questions?"

   }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}
//JSON.parse -> convert a string to an object
//JSON.stringify -> convert an object to a string

function init() {
    //console.log(5)
    // use inquirer to ask the questions in the
    // question array

    // generate markdown using the markdown function
    // write the markdown to the file.

    inquirer
        .prompt(questions)
        .then(function(response){
            console.log(response)
            const md = markDown(response)
            writeToFile("README.md", md);
        })

}

init();