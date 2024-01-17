const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const read = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  return content;
};

const render = (content, params) => {
  const renderedContent = ejs.render(content, { ...params });
  return renderedContent;
};

const write = (filePath, content) => {
  const directoryPath = path.dirname(filePath);
  fs.mkdirSync(directoryPath, { recursive: true });

  fs.writeFileSync(filePath, content);
};

const edit = (fileContent, identifier, additionalContent) => {
  const index = fileContent.lastIndexOf(identifier);

  const firstHalf = fileContent.slice(0, index + identifier.length);
  const secondHalf = fileContent.slice(index + identifier.length);

  const updatedContent = firstHalf + additionalContent + secondHalf;

  return updatedContent;
};

module.exports = { read, render, write, edit };
