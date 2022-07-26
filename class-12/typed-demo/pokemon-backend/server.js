'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pokemon = require('./models/Pokemon.js');

mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
// if we want to read JSON on a request, we need to add one line of config
app.use(express.json()); // a nice and easy  way to tell express to look out for json data on every request.

app.post('/pokemon', (request, response, next) => {

  console.log(request.body); // a JSON object if attached when the request is made.
  let { name, type, hp, ap } = request.body;
  if (!name || !type || !parseInt(hp) || !parseInt(ap)) {
    next('Bad request');
  }

  // read values from the JSON sent from the client and create a new Pokemon!
  let pokemon = new Pokemon({
    name,
    type,
    hp: parseInt(hp),
    ap: parseInt(ap),
  });
  pokemon.save()
    .then(results => {
      response.send(results);
    })
    .catch(e => {
      next(e);
    });

});

// Request Parameter :something => defining a parameter name in a function
app.get('/pokemon', async (request, response, next) => {

  try {
    let results = await Pokemon.find();
    response.send(results);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

app.delete('/pokemon/:id', async (request, response, next) => {

  let id = request.params.id;
  try {
    let pokemon = await Pokemon.deleteOne({ _id: id });
    response.send(pokemon);
  } catch(e) {
    next(e);
  }
});

app.use((error, req, res, next) => {
  res.status(500).send(error);
});

app.listen(PORT, () => {
  console.log('Server running!');
});
