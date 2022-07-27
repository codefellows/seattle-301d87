const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  description: String,
  status: String,
});

const Book = mongoose.model('Book', bookSchema); // this connects our server to a specific database collection.

module.exports = Book;
