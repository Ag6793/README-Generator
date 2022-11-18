// github license badge : 	/github/license/:user/:repo
//npm license: /npm/l/:packageName
// badge from readme guide : ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)`
    } 
    return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [license](#license)\n`}
    else if (license === 'MIT') {
      return `\n* [license](https://choosealicense.com/licenses/mit/)\n`
    } else if (license === 'APACHE 2.0') {
      return `\n* [license](https://choosealicense.com/licenses/apache-2.0/)\n`
    } else if (license === 'BSD 2') {
      return `\n* [license](https://opensource.org/licenses/BSD-2-Clause)\n`
    }

    return ''
}
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Technologies
${data.technologies}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
