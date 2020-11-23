const path = require("path");
const fs = require("fs");
const { ROOT_PATH } = require("../constants");

exports.parseReadJSON = (filename, _fs = fs, _path = path) => {
  const filePath = _path.join(ROOT_PATH, `/database/${filename}.json`);
  const rawData = _fs.readFileSync(filePath);
  return JSON.parse(rawData);
};

exports.stringifyWriteJSON = (filename, contents, _fs = fs, _path = path) => {
  const filePath = _path.join(ROOT_PATH, `/database/${filename}.json`);
  const rawData = JSON.stringify(contents, null, 2);
  _fs.writeFileSync(filePath, rawData);
};
