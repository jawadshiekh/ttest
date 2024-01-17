const path = require("path");
const inquirer = require("inquirer");

const { read, render, write } = require("../utilities/fileUtils");
const { scriptFileNames } = require("../constants");

const templatePath = path.join(__dirname, "../template");
const rootPath = path.join(__dirname, "../..");

const createScripts = async () => {
  const answers = await inquirer.prompt(scriptFileNames);

  for (const [key, value] of Object.entries(answers)) {
    if (value) {
      const content = read(templatePath + `/scripts/${key}/index.js`);
      const template = render(content);
      write(rootPath + `/scripts/${key}/index.js`, template);
    }
  }
};

module.exports = createScripts;
