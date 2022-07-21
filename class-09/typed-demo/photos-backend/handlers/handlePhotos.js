'use strict';

const axios = require('axios');
const ACCESS_KEY = process.env.ACCESS_KEY; // get this from your API,  docs are your friend.

async function handlePhotos(query) {
  // make our request to unsplash
  try {
    let url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}`;
    return await axios.get(url);
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = handlePhotos;
