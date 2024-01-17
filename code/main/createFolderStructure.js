var fs = require("fs");

const { folderNames, fileNames } = require("../constants");
const path = "../";

const createFolderStructure = async () => {
  folderNames.forEach((folder) => {
    fs.mkdirSync(path + folder);
  });

  fileNames.forEach((file) => {
    fs.writeFileSync(path + file, "");
  });
};

module.exports = createFolderStructure;
