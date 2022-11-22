//A function that returns a license badge based on which license is passed in or if no license selected it will return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-red.svg)`
    } 
    return ''
}

  
//A function that returns the license section of README and if there is no license it will return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`
  }
  return ''
}

//A function that returns the license link and if there is no license selected it will return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
      return `\n* [license](https://choosealicense.com/licenses/mit/)\n`
    } else if (license === 'APACHE2.0') {
      return `\n* [license](https://choosealicense.com/licenses/apache-2.0/)\n`
    } else if (license === 'BSD2') {
      return `\n* [license](https://opensource.org/licenses/BSD-2-Clause)\n`
    }

    return ''
}

// A function to generate markdown for README
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

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}


`;
}

module.exports = generateMarkdown;

