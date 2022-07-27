'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const getBooks = require('./getBooks.js');
const createBooks = require('./createBooks.js');
const Book = require('./models/Book.js');
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);
const PORT = process.env.PORT || 3001;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

app.get('/', (request, response) => {  response.status(200).send('Welcome!');})
app.get('/books', getBooks);
app.post('/books', createBooks);
app.delete('/books/:bookid', async (request, response, next) => {
  setTimeout(async () => {
    try {
      let id = request.params.bookid;
      let result = await Book.deleteOne({ _id: id });
      response.send(result);
    } catch (e) {
      next(e);
    }
  }, 2000);
});

app.use((error, request, response, next) => {
  response.status(500).send(error);
});
app.get('*', (request, response) => {  response.status(404).send('Not available');})
app.get('/test', (request, response) => {  response.send('test request received');})
app.listen(PORT, () => console.log(`listening on ${PORT}`));
