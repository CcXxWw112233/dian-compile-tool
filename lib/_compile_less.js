const lessc = require("less");
const { getSuffix, readFilesRecusion } = require("./_utils");
const fs = require("fs");
const _spawn = require("./_spawn");

function compileLess(dir_name, suffix_format = []) {
  const filesArr = readFilesRecusion(dir_name);
  filesArr.map(async (item) => {
    const suffix = getSuffix(item);
    if (suffix_format.includes(suffix)) {
      console.log(item);
      await _spawn("./node_modules/.bin/lessc");
    }
  });
}

module.exports = compileLess;
