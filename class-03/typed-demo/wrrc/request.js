'use strict';

const axios = require('axios'); // same thing as import

// create the request object
axios.get('https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/assets/data.json')
  .then(response => {
    console.log(response);
  });
