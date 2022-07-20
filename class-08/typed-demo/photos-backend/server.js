'use strict';

require('dotenv').config();
const axios = require('axios');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;
const ACCESS_KEY= process.env.ACCESS_KEY; // get this from your API,  docs are your friend.

const app = express();

app.use(cors());

app.get('/photos', (request, response) => {
  let searchQuery = request.query.searchQuery;
  console.log(searchQuery);
  // make our request to unsplash
  let url = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${searchQuery}`;
  axios.get(url)
    .then(res => {
      console.log(res.data.results);
      response.send(res.data.results);
    })
    .catch((e) => {
      console.log(e);
      response.status(500).send(e);
    });
});


app.listen(PORT, () => {
  console.log('Server is running on port : ' + PORT);
});
