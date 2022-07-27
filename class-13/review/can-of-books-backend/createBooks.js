'use strict';

const Book = require('./models/Book.js');

module.exports = async function createBooks(req, res, next) {
  try {
    let submittedBook = await Book.create(req.body);
    console.log(submittedBook);
    res.status(200).send(submittedBook);
  }
  catch (error) {
    next(error);
  }
};
