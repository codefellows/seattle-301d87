'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Pokemon = require('./Pokemon.js');

mongoose.connect(process.env.DATABASE_URL);

const name = process.argv[2];
const type = process.argv[3] || 'normal';

let pokemon = new Pokemon({
  name,
  type
});

pokemon.save().then(data => {
  console.log('Pokemon Created!! ', data);
});
