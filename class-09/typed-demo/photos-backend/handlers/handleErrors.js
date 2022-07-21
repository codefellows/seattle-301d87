'use strict';

function handleErrors(error, request, response, next) {
  response.status(500).send(error);
}

module.exports = handleErrors;
