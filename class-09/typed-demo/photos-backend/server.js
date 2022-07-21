'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const handleErrors = require('./handlers/handleErrors');
const handlePhotos = require('./handlers/handlePhotos');

const PORT = process.env.PORT;
const app = express();

app.use(cors());

// fetching photos, from the unsplash API
// handling an error.
app.get('/photos', async (request, response) => {
  let searchQuery = request.query.searchQuery;
  let res = await handlePhotos(searchQuery);
  response.send(res.data);
});

app.use(handleErrors);

app.listen(PORT, () => {
  console.log('Server is running on port : ' + PORT);
});
