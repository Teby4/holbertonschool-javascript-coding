#!/usr/bin/node

const fs = require('fs');
const filepath = process.argv[2];

function filereader (filepath) {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

filereader(filepath);
