#!/usr/bin/node

const fs = require('fs');
const filepath = process.argv[2];
const writedata = process.argv[3];

function filewriter (filepath, writedata) {
  fs.writeFile(filepath, writedata, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    }
  });
}

filewriter(filepath, writedata);
