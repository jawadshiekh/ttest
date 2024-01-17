const path = require("path");

const { read, render, write } = require("../utilities/fileUtils");

const templatePath = path.join(__dirname, "../template");
const rootPath = path.join(__dirname, "../..");

const createStarterRoutesCode = () => {
  const content = read(templatePath + "/routes/index.js");
  const template = render(content);
  write(rootPath + "/routes/index.js", template);
};

const createStarterAppCode = () => {
  const content = read(templatePath + "/app.js");
  const template = render(content);
  write(rootPath + "/app.js", template);
};

const createStarterServerCode = () => {
  const content = read(templatePath + "/server.js");
  const template = render(content);
  write(rootPath + "/server.js", template);
};

const insertStarterCode = async () => {
  createStarterServerCode();
  createStarterAppCode();
  createStarterRoutesCode();
};

module.exports = insertStarterCode;
