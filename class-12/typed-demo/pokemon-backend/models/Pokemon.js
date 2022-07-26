'use strict';

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const pokemonSchema = new Schema({
  name: String,
  type: String,
  hp: Number,
  ap: Number
});

module.exports = model('Pokemon', pokemonSchema);
