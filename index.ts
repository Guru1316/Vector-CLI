#!/usr/bin/env node

import { Command } from "commander";  // ✅ works with esModuleInterop=true

const program = new Command();

program
  .name("vector")
  .description("🚀 Vector CLI - your startup’s command line tool")
  .version("1.0.0");

program
  .command("greet <name>")
  .description("Say hello to someone")
  .action((name) => {
    console.log(`👋 Hey ${name}, welcome to Vector CLI!`);
  });

program
  .command("add <a> <b>")
  .description("Add two numbers")
  .action((a, b) => {
    console.log(`Result: ${Number(a) + Number(b)}`);
  });

program
  .command("startup")
  .description("Get info about Vector Startup 🚀")
  .action(() => {
    console.log("📌 Vector Startup - Innovating the future with CLI tools!");
  });

program.parse(process.argv);
