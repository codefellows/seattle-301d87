'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// define our Schema and create a Model to talk to our collection.
const schema = new mongoose.Schema({
  name: String,
  type: String,
  ap: Number,
  hp: Number
});

const Pokemon = mongoose.model('Pokemon', schema);

let pokemonId = process.argv[2];

let keys = ['name', 'type', 'hp', 'ap'];
let pokemonValues = process.argv.slice(3, process.argv.length);
let pokemonData = {};
if (pokemonValues.length < keys.length) {
  console.error('Need a name / type / ap / hp values');
  process.exit();
} else {
  keys.forEach((key, idx) => {
    pokemonData[key] = pokemonValues[idx];
  });
}

Pokemon.findOneAndReplace({_id: pokemonId}, pokemonData, { new: true })
  .then(document => {
    console.log(document);
    mongoose.disconnect();
  })
  .catch(e => {
    console.error(e);
  });
