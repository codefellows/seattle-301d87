'use strict';

const axios = require('axios');
let cache = require('./cache.js');

module.exports = getMovies;

function getMovies(location) {
  const key = 'movies-' + location;
  const url = `https://api.themoviedb.org/3/search/movie/?api_key=${process.env.MOVIE_API_KEY}&langeuage=en-US&page=1&query=${location}`;

  if (!cache[key]) {
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
    .then(data => parseMoviesData(data.data));
  }
  return cache[key].data;
}

function parseMoviesData(data) {
  try {
    const movies = data.results.map(movie => {
      return new Movie(movie);
    });
    return Promise.resolve(movies);
  } catch(e) {
    return Promise.reject(e);
  }
}

class Movie {
  constructor(movie) {
    this.tableName = 'movies';
    this.title = movie.title;
    this.overview = movie.overview;
    this.averageVotes = movie.vote_average;
    this.totalVotes = movie.vote_count;
    this.imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    this.popularity = movie.popularity;
    this.releasedOn = movie.release_date;
    this.timestamp = Date.now();
  }
}
