const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const fs = require("fs");
const { clone } = require("./_download");
const open = require("open");
const _spawn = require("./_spawn");
const _rename = require("./_rename");
const _delete_file = require("./_delete_file");
const _compile_less = require("./_compile_less");

const { log } = require("./_utils");
module.exports = async (name, options) => {
  log("ssadad");
  _compile_less(`${name}`, [".less"]);
};
