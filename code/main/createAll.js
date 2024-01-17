const inquirer = require("inquirer");

const createFolderStructure = require("./createFolderStructure");
const insertStarterCode = require("./insertStarterCode");
const createScripts = require("./createScripts");
const createMiddlewares = require("./createMiddlewares");
const createConfigs = require("./createConfigs");
const setupCRUD = require("./setupCRUD");

const createAll = async () => {
  const answersFolder = await inquirer.prompt([
    {
      type: "confirm",
      name: "single",
      message: "Wanna create folder structure? Note: might ruin your current codebase, if any!",
    },
  ]);
  if (answersFolder.single) await createFolderStructure();

  const answersStarter = await inquirer.prompt([{ type: "confirm", name: "single", message: "Wanna insert starter code?" }]);
  if (answersStarter.single) await insertStarterCode();

  const answersScripts = await inquirer.prompt([{ type: "confirm", name: "single", message: "Wanna create scripts?" }]);
  if (answersScripts.single) await createScripts();

  const answersMiddlewares = await inquirer.prompt([{ type: "confirm", name: "single", message: "Wanna create middlewares?" }]);
  if (answersMiddlewares.single) await createMiddlewares();

  const answersConfigs = await inquirer.prompt([{ type: "confirm", name: "single", message: "Wanna create config files?" }]);
  if (answersConfigs.single) await createConfigs();

  const answersCrud = await inquirer.prompt([
    { type: "confirm", name: "single", message: "Wanna create CRUD operation? includes (routes, controllers, validations, repositories, DTO)" },
  ]);
  if (answersCrud.single) await setupCRUD();

  console.log("all setup 🙂, Happy coding!");
};

module.exports = createAll;
