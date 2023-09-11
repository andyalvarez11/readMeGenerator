const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = ({
  projectName,
  projectDescription,
  installation,
  usage,
  userContribution,
  commandTests,
  license,
  userName,
  email,
}) => {
  return `
# ${projectName}

## Description
${projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install dependencies, run the following command:
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${userContribution}

## Tests
To run tests, use the following command:
\`\`\`
${commandTests}
\`\`\`

## Questions
If you have any questions, feel free to reach out to me on GitHub:
[${userName}](https://github.com/${userName})

You can also contact me via email at ${email}.
`;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Please write a short description of your project",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should you have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "commandTests",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "userContribution",
      message: "What does the user need to know about contributing to the repo?",
    },
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile("README.md", readMeContent, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("README generated successfully");
      }
    });
  });
