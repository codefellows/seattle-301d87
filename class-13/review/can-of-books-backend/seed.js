'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book.js');

mongoose.connect(process.env.DATABASE_URL);

async function seed(){
  await Book.create({
    title: 'Jurassic Park',
    description: 'A group of scientists visit an island where a visionary millionaire has created a theme park with actual dinosaurs and things go awry!',
    status: true,
  });
  await Book.create({
    title: 'Ender\'s Game',
    description: 'The novel tells the story of a young boy, Ender Wiggin, who is sent to a training academy named Battle School, located in orbit above the Earth, built to train people to become soldiers that will one day battle against a vast alien race known as "Buggers"',
    status: true,
  });
  await Book.create({
    title: 'Station Eleven',
    description: 'A post-apocalyptic thriller following a father and son making their away across a desolate world',
    status: false,
  });
  mongoose.disconnect();
}

seed();
