// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');

//Make a string template literal
const generateREADME = ({ title, description, technologies, installation, usage, credits, year, fullname}) =>
    `# ${title}

## Description
${description}

## Technologies
${technologies}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
MIT License

Copyright (c) [${year}] [${fullname}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
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
    {
        type: 'input',
        name: 'year',
        message: 'What is the current year?',
    },
    {
        type: 'input',
        name: 'fullname',
        message: 'What is your fullname?',
    },

    //What was your motivation?
    //Why did you build this project?
    //What problem does it solve?
    //what did you learn?
    //what makes your project stand out?

])
    .then((answers) => {
        const READcontent = generateREADME(answers);

        fs.writeFile('README.md', READcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
});

