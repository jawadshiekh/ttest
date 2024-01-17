const path = require("path");
const inquirer = require("inquirer");

const objectIntoThunderClientApiCollection = require("./createThunderClientApiCollection");

const { read, render, write, edit } = require("../utilities/fileUtils");
const { parseStringToObject } = require("../utilities/stringUtils");

const templatePath = path.join(__dirname, "../template");
const rootPath = path.join(__dirname, "../..");

const createRoutes = (entity) => {
  // creates group route in index.js
  const createGroupRoute = (groupName) => {
    const fileContent = read(rootPath + "/routes/index.js");
    const updatedContent = edit(fileContent, "// routes", `\nrouter.use('/${groupName.pluralize()}', require('./${groupName.pluralize()}'));`);
    write(rootPath + "/routes/index.js", updatedContent);
  };

  // creating child template
  const creatingChildTemplate = (childName) => {
    const content = read(templatePath + `/routes/index.js`);
    const template = render(content);
    write(rootPath + `/routes/${childName.pluralize()}/index.js`, template);
  };

  // creates child group routes
  const createChildRoute = (groupName, childName) => {
    const fileContent = read(rootPath + `/routes/${groupName.pluralize()}/index.js`);
    const updatedContent = edit(fileContent, "// routes", `\nrouter.use('/${childName.pluralize()}', require('./${childName.pluralize()}'));`);
    write(rootPath + `/routes/${groupName.pluralize()}/index.js`, updatedContent);
  };

  // adding crud routes
  const createCrudRoutes = (groupName, childName) => {
    const content = read(templatePath + "/routes/route.routes.js");
    const template = render(content, { entityName: childName });
    write(rootPath + `/routes/${groupName.pluralize()}/${childName.pluralize()}.js`, template);
  };

  for (key in entity) {
    createGroupRoute(key);
    creatingChildTemplate(key);

    const childRoutes = entity[key];

    childRoutes.forEach((child) => {
      createChildRoute(key, child);
      createCrudRoutes(key, child);
    });
  }
};

const createControllers = (entity) => {
  const createCrudControllers = (groupName, childName) => {
    const content = read(templatePath + "/controllers/controller.controllers.js");
    const template = render(content, { entityGroupName: groupName, entityName: childName });
    write(rootPath + `/controllers/${groupName.pluralize()}/${childName.pluralize()}.controllers.js`, template);
  };

  for (key in entity) {
    const childRoutes = entity[key];

    childRoutes.forEach((child) => {
      createCrudControllers(key, child);
    });
  }
};

const createRepositories = (entity) => {
  const createCrudRepositories = (groupName, childName) => {
    const content = read(templatePath + "/repositories/repository.js");
    const template = render(content, { entityName: childName });
    write(rootPath + `/repositories/${groupName.pluralize()}/${childName.pluralize()}.js`, template);
  };

  for (key in entity) {
    const childRoutes = entity[key];

    childRoutes.forEach((child) => {
      createCrudRepositories(key, child);
    });
  }
};

const createValidations = (entity) => {
  const createCrudValidation = (groupName, childName) => {
    const content = read(templatePath + "/validations/validation.js");
    const template = render(content, { entityName: childName });
    write(rootPath + `/validations/${groupName.pluralize()}/${childName.pluralize()}.js`, template);
  };

  for (key in entity) {
    const childRoutes = entity[key];

    childRoutes.forEach((child) => {
      createCrudValidation(key, child);
    });
  }
};

const setupCRUD = async () => {
  const { entity } = await inquirer.prompt({
    type: "input",
    name: "entity",
    message: `Please enter your entity names followed by their child routes in the following format:
    EntityName: - ChildRoute1 - ChildRoute2; AnotherEntity: - ChildRouteA - ChildRouteB;`,
  });

  const entityObject = parseStringToObject(entity);

  createRoutes(entityObject);
  createControllers(entityObject);
  createRepositories(entityObject);
  createValidations(entityObject);

  // wring thunder client collection api
  const collection = objectIntoThunderClientApiCollection(entityObject);
  write(rootPath + "/documentation/collection.json", JSON.stringify(collection));

  const { more } = await inquirer.prompt({ type: "confirm", name: "more", message: `wanna create more CRUD?` });
  more && setupCRUD();
};

module.exports = setupCRUD;
