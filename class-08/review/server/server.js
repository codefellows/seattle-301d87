'use strict';

require('dotenv').config();
// require is a function built into Node, loads exported values into our current file.
const express = require('express'); // whats happening at this point.
const cors = require('cors');

const PORT = process.env.PORT;

// import the data
const weatherData = require('./data/weather.json');

class Forecast {
  constructor(obj) {
    this.date = obj.datetime;
    this.description = 'low of ' + obj.low_temp + ', high of ' + obj.high_temp + ' with ' + obj.weather.description.toLowerCase();
  }
}


const app = express();
app.use(cors()); // set up cross origin resource sharing

// create a weather route
app.get('/weather', (request, response) => {
  console.log(request.query);
  let { lat, lon, searchQuery } = request.query;

  if (!lat || !lon || !searchQuery) {
    throw new Error('Please send lat lon and search query as a query string');
  }

  // find appropriate value from weatherData
  // use search Query to find an object within weather data
  let city = weatherData.find(city => {
    return city.city_name.toLowerCase() === searchQuery.toLowerCase();
  });

  if (city) {
    // create forecast objects for each forcast in city.data
    let forecastArray = city.data.map(forecast => new Forecast(forecast));
    response.send(forecastArray);
  } else {
    response.status(404).send('City not found');
  }
});

// error handling??
app.use('*', (error, request, response, next) => {
  // next is a function that moves the request to the next middleware
  response.status(500).send(error);
});

app.use('*', (request, response) => {
  response.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log('Server is running on port : ' + PORT);
});
