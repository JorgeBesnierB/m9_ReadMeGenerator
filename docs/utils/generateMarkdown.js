// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } 
  else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
    } else {
      return " ";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "no license") {
    return ` 
  ## [License](#table-of-contents)
  Application license: ${renderLicenseLink(license)}}
    `;
  } 
  else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.ProjectTitle}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#contact)
  
  ${renderLicenseSection(data.license)}

  ## [Description](#table-of-contents)
    ${data.ProjectDescription}
  
  ## [Installation](#table-of-contents)
    ${data.ProjectInstall.map(step => `* ${step}`).join('\n    ')}

  ## [Usage](#table-of-contents)
    ${data.ProjectRun.map(step => `* ${step}`).join('\n    ')}

  ## [Contributing](#table-of-contents)
    ${data.ProjectGuidlines.map(step => `* ${step}`).join('\n    ')}

  ## [Tests](#table-of-contents)
    ${data.TestRun.map(step => `* ${step}`).join('\n    ')}
  
  ## [Contact](#table-of-contents)
    - [GitHub: ${data.userGithub}](https://github.com/${data.userGithub})
    - [Email: ${data.userEmail}](mailto:${data.userEmail})
`;
}

module.exports = generateMarkdown;
