#!/usr/bin/env node
const program = require("commander");
program.version(require("../package.json").version);

program
  .command("compile <name>")
  .description("init project")
  //   .option("-t, --typescript", "项目默认typescript模板")
  //   .option("-c, --component", "项目用于开发npm组件")
  //   .option("-i, --install", "npm install")
  .action(require("../lib/compile.js"));

program.parse(process.argv);
