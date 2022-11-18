// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Make a string template literal
const generateREADME = ({ name, description}) =>
    `# ${name}
    
    ## Description
    ${description}
  
    `;

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
    }
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'What are the steps required to install your project?',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Provide instructions and examples for use. Include screenshots as needed'
    // },
    // {
    //     type: 'input',
    //     name: 'credits',
    //     message: 'List your collaborators and links to their Github profiles',
    // },
    // {

    // }
    //What was your motivation?
    //Why did you build this project?
    //What problem does it solve?
    //what did you learn?
    //what makes your project stand out?
    //"Your Project Title", "Description", "Installation", "Usage", "Credits", "License", "Badges"
])
    .then((answers) => {
        const READcontent = generateREADME(answers);

        fs.writeFile('README.md', READcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
});
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
