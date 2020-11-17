const path = require("path");
const fs = require("fs");
const { ROOT_PATH } = require("../constants");

exports.parseReadJSON = (filename) => {
  const filePath = path.join(ROOT_PATH, `/database/${filename}.json`);
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

exports.stringifyWriteJSON = (filename, contents) => {
  const filePath = path.join(ROOT_PATH, `/database/${filename}.json`);
  const rawData = JSON.stringify(contents, null, 2);
  fs.writeFileSync(filePath, rawData);
};
