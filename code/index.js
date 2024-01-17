require("./prototype/stringExtension");

const createFolderStructure = require("./main/createFolderStructure");
const insertStarterCode = require("./main/insertStarterCode");
const createScripts = require("./main/createScripts");
const createMiddlewares = require("./main/createMiddlewares");
const createConfigs = require("./main/createConfigs");
const createAll = require("./main/createAll");
const setupCRUD = require("./main/setupCRUD");

const { constants } = require("./constants");

const command = process.argv[2];

switch (command) {
  case "help":
    console.log(constants.help);
    break;
  case "folder_structure":
    createFolderStructure();
    break;
  case "insert_starter_code":
    insertStarterCode();
    break;
  case "create_scripts":
    createScripts();
    break;
  case "create_middlewares":
    createMiddlewares();
    break;
  case "create_configs":
    createConfigs();
    break;
  case "create_all":
    createAll();
    break;
  case "setup_crud":
    setupCRUD();
    break;
  default:
    console.log(constants.invalidCommand);
    break;
}
