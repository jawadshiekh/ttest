const path = require("path");

const { read, render, write } = require("../utilities/fileUtils");

const templatePath = path.join(__dirname, "../template");
const rootPath = path.join(__dirname, "../..");

const createStarterLogsCode = () => {
  write(rootPath + "/logs/combined.log", "");
  write(rootPath + "/logs/error.log", "");
};

module.exports = {
  createStarterLogsCode,
};
