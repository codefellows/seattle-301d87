'use strict';

const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

// In general we want to think of this server as stateless.
let pokedex = {}; // caching things that have already been requested/.

async function handlePokemon(pokemon) {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    let response = await axios.get(url);
    return response;
  } catch (e) {
    throw new Error(e);
  }
}

app.get('/pokemon', async (req, res) => {
  let pokemonName = req.query.name;
  if (!pokemonName) throw new Error('Please provide a pokemon name');
  // if We find the pokemonName in our Pokedex, let's not request data from the PokeAPI
  if (pokedex[pokemonName]) {
    console.log('Data found in cache', pokedex);
    res.send(pokedex[pokemonName]);
  } else {
    let pokemonResponse = await handlePokemon(pokemonName);
    console.log('Adding API data to cache');
    // once request is made let's cache the response
    pokedex[pokemonName] = pokemonResponse.data;
    res.send(pokemonResponse.data);
  }
});

app.listen(PORT, () => {
  console.log('Server is running!!');
});
