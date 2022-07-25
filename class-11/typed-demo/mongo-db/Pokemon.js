'use strict';

const mongoose = require('mongoose');

// Mongoose needs Models!
// Let's create a schema for a pokemon
let pokemonSchema = new mongoose.Schema({
  name: String,
  type: String
});

// Mongoose Model, use like a constructor function
const Pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = Pokemon;

// let pikachu = new Pokemon({
//   name: 'Pikachu',
//   type: 'Electric',
// });

// pikachu.save()
//   .then(() => {
//     Pokemon.find().then(data => {
//       // do things with the data.
//       console.log(data);
//     });
//   });

