// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateMarkdown = data =>
  `# ${data.title}
  ${renderLicenseBadge(renderLicenseLink(data.license))}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#Questions)
  ${renderLicenseToc(data.license)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  View my GitHub profile [here!](http://github.com/${data.github})

  If you have any questions, please reach me at <a href="mailto:${data.email}">${data.email}</a>
  ${renderLicenseHeader(data.license)}
  ${renderLicenseSection(data.license, data.name)}
  `
  ;

module.exports = generateMarkdown;
