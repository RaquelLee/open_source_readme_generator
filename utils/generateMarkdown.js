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

const renderLicenseSection = (license, name) => {
  switch(license){
    case "none":
      return "";
    case "Apache License 2.0":
      return 'Copyright ' + d.getFullYear() + "  " + name + '<br /> Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at <br /> http://www.apache.org/licenses/LICENSE-2.0';
    case "GNU General Public License v3.0":
      return "GNU GENERAL PUBLIC LICENSE <br /> Version 3, 29 June 2007 <br /> Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/";
    case "MIT License":
      return "MIT License <br /> Copyright (c) " + d.getFullYear() + " " + name;
    case 'BSD 2-Clause "Simplified" License':
      return "BSD 2-Clause License <br /> Copyright (c) " + d.getFullYear() + "," + name + " All rights reserved.";
    case 'BSD 3-Clause "New" or "Revised" License':
      return "BSD 3-Clause License <br /> Copyright (c) " + d.getFullYear() + "," + name + " All rights reserved.";
    case "Boost Software License 1.0":
      return "Boost Software License - Version 1.0 - August 17th, 2003";
    case "Creative Commons Zero v1.0 Universal":
      return "Creative Commons Legal Code <br /> CC0 1.0 Universal";
    case "Eclipse Public License 2.0":
      return "Eclipse Public License - v 2.0";
    case "GNU Affero General Public License v3.0":
      return "GNU AFFERO GENERAL PUBLIC LICENSE <br /> Version 3, 19 November 2007<br /> Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/";
    case "GNU General Public License v2.0":
      return "GNU GENERAL PUBLIC LICENSE <br /> Version 2, June 1991 <br /> ";
    case "GNU Lesser General Public License v2.1":
      return "GNU LESSER GENERAL PUBLIC LICENSE <br /> Version 2.1, February 1999";
    case "Mozilla Public License 2.0":
      return "Mozilla Public License 2.0, viewable at http://mozilla.org/MPL/2.0/.";
    case "The Unilicense":
      return "This is free and unencumbered software released into the public domain. <br /> For more information, please refer to https://unlicense.org";
  };
  };