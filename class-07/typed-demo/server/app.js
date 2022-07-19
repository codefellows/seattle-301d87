'use strict';

const express = require('express');
// CORS - cross origin resource sharing
// origin - the beginning of your url
const cors = require('cors');
const data = require('./data.json');


// singleton ( there can only be one!! )
const app = express(); // returns an object, with methods designed to handle Requests.
const PORT = 3001;

// enable cross origin resource sharing between localhost:3001 and any other url that may make a request.
app.use(cors());

//provide the app object, with verbs and paths
app.get('/hello', (request, response) => {
  console.log(request);
  // do something
  response.send('hey there'); // every callback must send back a response.
});

// route with query parameters
app.get('/params', (request, response) => {

  console.log(request.query);

  response.send('Thanks for the parameters');
});

app.get('/pokemon', (request, response) => {

  let pokemonName = request.query.pokemon;

  if (pokemonName) {
    if (data.pokemon.includes(pokemonName)) {
      response.send(data.pokemon);
    } else {
      response.status(404).send('Pokemon not found');
    }
  } else {
    response.status(400).send('Please give me a pokemon name!');
  }

});

app.get('/error', (request, response) => {

  throw new Error('Server not happy!!');

});

// error handlers take a special 1st parameter, that will be any error thrown from another route handler
app.use('*', (error, request, response, next) => {
  response.send(500).send(error);
});

// put error handlers down here
app.use('*', (request, response) => {
  console.log('catch all route hit');
  response.status(404).send('Route Not found :(');
});

// opens up the server for requests
app.listen(PORT, () => {
  console.log('Server is running on port :: ' + PORT);
});
