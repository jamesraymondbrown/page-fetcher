let input = process.argv.slice(2);

const fs = require('fs');

let bodyLength = [];

const request = require('request');
request(`${input[0].toString()}`, (error, response, body) => {
  bodyLength.push(body.length);
  saveFile(body);
});

const saveFile = (content) => fs.writeFile(`${input[1].toString()}`, content, err => {
  if (err) {
    console.error(err);
  } displayMessage();
  // file written successfully
});

const displayMessage = () => {
  console.log(`Downloaded and saved ${bodyLength[0]} bytes to ${input[1].toString()}`);
};