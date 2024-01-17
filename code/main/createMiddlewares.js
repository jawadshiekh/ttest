const path = require("path");
const inquirer = require("inquirer");

const { read, render, write } = require("../utilities/fileUtils");
const { middlewareFileNames } = require("../constants");

const templatePath = path.join(__dirname, "../template");
const rootPath = path.join(__dirname, "../..");

const createMiddlewares = async () => {
  const answers = await inquirer.prompt(middlewareFileNames);

  for (const [key, value] of Object.entries(answers)) {
    if (value) {
      const content = read(templatePath + `/middlewares/${key}.middleware.js`);
      const template = render(content);
      write(rootPath + `/middlewares/${key}.middleware.js`, template);
    }
  }
};

module.exports = createMiddlewares;
