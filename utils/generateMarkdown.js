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
  ${renderLicenseSection(data.license, data.name)}`
  ;

module.exports = generateMarkdown;

const renderLicenseToc = license => license === "none" ?  "" : "* [License](#License)";

const renderLicenseHeader = license => license === "none" ? "" : "## License";

const renderLicenseBadge = license => license === "" ?  "" : '![license](https://img.shields.io/badge/license-' + license + ')';

const renderLicenseLink = license => {
  switch(license){
    case "none":
      return "";
    case "Apache License 2.0":
      return "Apache--2.0-green";
    case "GNU General Public License v3.0":
      return "GPL--3.0-orange";
    case "MIT License":
      return "MIT-green";
    case 'BSD 2-Clause "Simplified" License':
      return "BSD--2--Clause-green";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "BSD--3--Clause-green";
    case "Boost Software License 1.0":
      return "BSL--1.0-green";
    case "Creative Commons Zero v1.0 Universal":
      return "CC0--1.0-brightgreen";
    case "Eclipse Public License 2.0":
      return "EPL--2.0-orange";
    case "GNU Affero General Public License v3.0":
      return "AGPL--3.0-orange";
    case "GNU General Public License v2.0":
      return "GPL--2.0-orange";
    case "GNU Lesser General Public License v2.1":
      return "LGPL--2.1-orange";
    case "Mozilla Public License 2.0":
      return "MPL--2.0-orange";
    case "The Unilicense":
      return "Unilicense-brightgreen";
  };
};

const d = new Date();
