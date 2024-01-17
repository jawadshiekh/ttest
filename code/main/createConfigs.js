const path = require("path");
const inquirer = require("inquirer");

const { read, render, write } = require("../utilities/fileUtils");
const { configFileNames } = require("../constants");

const { createStarterLogsCode } = require("./createMore");

const templatePath = path.join(__dirname, "../template");
const rootPath = path.join(__dirname, "../..");

const createConfigs = async () => {
  const answers = await inquirer.prompt(configFileNames);

  for (const [key, value] of Object.entries(answers)) {
    if (value) {
      const content = read(templatePath + `/config/${key}.config.js`);
      const template = render(content);
      write(rootPath + `/config/${key}.config.js`, template);
    }

    // additional dependent work
    if (key === "logger" && value === true) {
      createStarterLogsCode();
    }
  }
};

module.exports = createConfigs;
