const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const generateREADME = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for the project?',
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What type of license do you want?',
        choices: ['MIT','APACHE2.0', 'BSD2', 'None']
    },
    {
        type: 'input',
        name: 'technologies',
        message: 'What are the technologies used in this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and links to their Github profiles',
    }, 

]

function writeToFile (name, data) {
    return fs.writeFileSync (name, data)
}

function app() {

inquirer 
    .prompt(generateREADME)
    .then((data) => writeToFile('README_sample.md', generateMarkdown(data))) 
    .then (() => console.log('Successfully created README.md!'))
    .catch((err) => console.log(err));
    
}
app();
