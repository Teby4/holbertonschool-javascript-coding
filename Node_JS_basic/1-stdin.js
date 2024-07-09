#!/usr/bin/node

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

readline.question('', (name) => {
  console.log(`Your name is: ${name.trim()}\r`);
  readline.close();
});

readline.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
