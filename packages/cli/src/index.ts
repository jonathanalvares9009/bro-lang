#! /usr/bin/env node
import interpreter from "bro-lang-interpreter";
import chalk from "chalk";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

console.info(
  chalk.hex("#83aaff")(`
██████╗░██████╗░░█████╗░██╗░░░░░░█████╗░███╗░░██╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗██║░░░░░██╔══██╗████╗░██║██╔════╝░
██████╦╝██████╦╝██║░░██║██║░░░░░███████║██╔██╗██║██║░░██╗░
██╔══██╗██╔══██╗██║░░██║██║░░░░░██╔══██║██║╚████║██║░░╚██╗
██████╦╝██║░░██║╚█████╔╝███████╗██║░░██║██║░╚███║╚██████╔╝
╚═════╝░╚═╝░░╚═╝░╚════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

https://github.com/jonathanalvares9009/bro-lang
`)
);

const cl = console.log;

console.log = function (...args) {
  const newArgs = args.map((arg) => {
    return `${chalk.hex("#83aaff")(">  ")}${chalk.greenBright(arg)}`;
  });
  cl.apply(console, newArgs);
};

const filePath = yargs(hideBin(process.argv))
  .command(
    "<filepath>",
    "Interpret the contents of the .bro file and print it to stdout",
    () => {},
    (argv) => {
      console.info(argv);
    }
  )
  .check((argv) => {
    if (typeof argv._[0] !== "string" || !argv._[0].endsWith(".bro")) {
      throw new Error("Invalid file extension. Please provide a .bro file");
    }
    if (!fs.existsSync(argv._[0])) {
      throw new Error("File does not exist");
    }
    return true;
  })
  .demandCommand(1).argv._[0];

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    interpreter.interpret(data);
  } catch (ex) {
    if (ex instanceof Error) {
      console.error("\n", chalk.redBright(ex.stack));
    }
  }
});
