#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const characterId = 18;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const filmData = JSON.parse(body).results;
  const matches = filmData.filter(film => film.characters.includes(characterId));
  console.log(matches.length);
});
