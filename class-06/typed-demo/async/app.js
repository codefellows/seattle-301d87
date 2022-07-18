'use strict';

require('dotenv').config();
const axios = require('axios');

// setTimeout(() => console.log('I have executed'), 2000);
// console.log('I have also executed');

// Promise => a constructor that lets us do something.
function fetchLocationData(query) {
  let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${query}&format=json`;
  axios.get(url)
    .then(response => {
      console.log(response.data[0]);
    })
    .catch(error => {
      console.log(error);
    });
}

fetchLocationData('chicago');
