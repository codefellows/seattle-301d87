'use strict';

const convertToFarenheit = (temp) => Math.trunc((temp) * 9 / 5 + 32);

function createForecast(data) {
  let Forecast = [];
  let high;
  let low;

  // res data contains information about a given city, includes array of forecasts
  data.data.map(element => {
    low = convertToFarenheit(element.low_temp);
    high = convertToFarenheit(element.high_temp);

    Forecast.push({
      "description": `Low of ${low}, high of ${high} with ${element.weather.description.toLowerCase()}`,
      "date": element.datetime
    });
  });

  return Forecast;
};

module.exports = {
  createForecast,
  convertToFarenheit
};
