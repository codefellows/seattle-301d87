'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pokemon = require('./Pokemon.js');

// URI to our running mongo db
mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.get('/pokemon', (request, response) => {

  let {name, type} = request.query;
  let queryObject = {};

  if (name) {
    queryObject.name = name;
  }
  if (type) {
    queryObject.type = type;
  }

  Pokemon.find(queryObject)
    .then(pokemonData => {
      response.send(pokemonData);
    });
});

app.listen(PORT, () => {
  console.log('Server is running on port : ', PORT);
});
