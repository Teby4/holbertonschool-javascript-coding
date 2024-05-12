#!/usr/bin/node

const request = require('request');
if (!process.argv[2]) {
  console.log('No movie number entered');
  process.exit(1); // Exit with error code 1
}

const movie = process.argv[2];
const api = `https://swapi-api.hbtn.io/api/films/${movie}/`;

request.get(api, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  const filmData = JSON.parse(body);
  console.log(`${filmData.title}`);
});
