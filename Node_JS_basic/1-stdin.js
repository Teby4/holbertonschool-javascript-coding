#!/usr/bin/node

const readline = require('readline')

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");

line.question('', (name) => {
  console.log(`Your name is: ${name}`);
  line.close();
});

line.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});