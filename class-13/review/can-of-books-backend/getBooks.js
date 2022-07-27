'use strict';

const Book = require('./models/Book.js');

async function getBooks(req, res, next) {

  let bookQuery = {};

  if (req.query.title) {
    bookQuery = {
      title: req.query.title
    };
  }
  try {
    let results = await Book.find(bookQuery);
    res.status(200).send(results);
  }
  catch (error) {
    next(error);
  }
}

module.exports = getBooks;
