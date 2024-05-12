#!/usr/bin/node

var fs = require('fs');
const filepath = process.argv[1];

function Readfile(filepath) {
  fs.readFile(filepath,'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}
