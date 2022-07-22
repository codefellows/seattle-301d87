'use strict';

require('dotenv').config();
const express = require('express');
// CORS - cross origin resource sharing
// origin - the beginning of your url
const cors = require('cors');
//const weather = require('./data/weather.json'); //was ./data.json also changed weather from data
const axios = require('axios').default;
const { createForecast } = require('./weather.js');


// singleton ( there can only be one!! )
const app = express(); // returns an object, with methods designed to handle Requests.
const PORT = process.env.PORT; //use 3000 -> process.env.PORT

// enable cross origin resource sharing between localhost:3000 or heroku server and any other url that may make a request.
app.use(cors());

//provide the app object, with verbs and paths
app.get('/hello', (request, response) => {
  console.log(request);
  // do something
  response.send('hey there'); // every callback must send back a response.
});

// route with query parameters
app.get('/params', (request, response) => {

  console.log(request.query);

  response.send('Thanks for the parameters');
});

async function handleRequest(url) {
  try {
    let response = await axios.get(url);
    return response;
  } catch (e) {
    throw new Error(e);
  }
}


app.get('/weather', async (request, response) => {
  let cityName = request.query.city;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${process.env.WEATHER_API_KEY}`;

  // refactor the request??
  try {
    let res = await handleRequest(url);
    if (cityName === res.data.city_name.toLowerCase()) {
      let Forecast = createForecast(res.data);

      response.send(Forecast);
    }
  } catch (e) {
    console.log(e);
  }


});

app.get('/movies', (request, response) => {
  let cityName = request.query.query;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIES_API_KEY}&query=${cityName}`;

  axios.get(url).then(res => {
    let movies = res.data.results;

    if (movies.length) {
      let cityMovies = [];

      movies.map(element => {
        cityMovies.push({
          "title": element.original_title,
          "overview": element.overview,
          "average_votes": element.vote_average,
          "total_votes": element.vote_count,
          "image_url": "https://image.tmdb.org/t/p/w500" + element.poster_path,
          "popularity": element.popularity,
          "released_on": element.release_date
        });
      });

      response.send(cityMovies);

    }

    // console.log(res);
    // response.send(res.data);
  })
    .catch(e => console.log(e));
});


app.get('/error', (request, response) => {

  throw new Error('Server not happy!!');

});

// error handlers take a special 1st parameter, that will be any error thrown from another route handler
app.use('*', (error, request, response, next) => {
  console.log(error);
  response.status(500).send(error);
});

// put error handlers down here
app.use('*', (request, response) => {
  console.log('catch all route hit');
  response.status(404).send('Route Not found :(');
});

// opens up the server for requests
app.listen(PORT, () => {
  console.log('Server is running on port :: ' + PORT);
});

//   let cities = res.data.map(element => element.city_name.toLowerCase());
//   if (cityName) {
//     if (cities.includes(cityName)) {
//       let i = cities.indexOf(cityName);
//       let Forecast = [];
//       res[i].data.map(element => Forecast.push({
//         "description": `Low of ${element.low_temp}, high of ${element.max_temp} with ${element.res.description.toLowerCase()}`,
//         "date": element.datetime
//       }));
//       response.send(Forecast);
//     } else {
//       response.status(404).send('City not found');
//     }
//   }
//   else {
//     response.status(400).send('Please give me a city name!');
//   }
// })
//   .catch(e => console.log(e));


// app.get('/pokemon', (request, response) => {

//   let pokemonName = request.query.pokemon;

//   if (pokemonName) {
//     if (data.pokemon.includes(pokemonName)) {
//       response.send(data.pokemon);
//     } else {
//       response.status(404).send('Pokemon not found');
//     }
//   } else {
//     response.status(400).send('Please give me a pokemon name!');
//   }

// });

// app.get('/weather', (request, response) => {
//   //You could also use the .find method to do similar logic
//   let cityName = request.query.city;

//   //console.log(response);
//   let cities = weather.map(element => element.city_name.toLowerCase());
//   if (cityName) {
//     if (cities.includes(cityName)) {
//       let i = cities.indexOf(cityName);
//       let Forecast = [];

//       weather[i].data.map(element => Forecast.push({
//         "description": `Low of ${element.low_temp}, high of ${element.max_temp} with ${element.weather.description.toLowerCase()}`,
//         "date": element.datetime
//       })
//       );
//       console.log(Forecast);
//       response.send(Forecast);
//     }
//     else {
//       response.status(404).send('City not found');
//     }
//   }
//   else {
//     response.status(400).send('Please give me a city name!');
//   }

// });