'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const app = express();
app.use(cors());

const PORT = process.env.PORT;

function verifyUser(request, response, next) {
  try {
    const token = request.headers.authorization.split(' ')[1];
    jwt.verify(token, getKey, {}, function(err, user) {
      request.user = user;
      next();
    });
  } catch(e) {
    console.log(e);
    next('not authorized');
  }
}

const client = jwksClient({
  jwksUri: process.env.JWKS_URI, // this comes from auth0, url for signing keys.
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

app.use(verifyUser);
app.use((request, response, next) => {
  console.log(request.user);
  console.log('ALmost made it');
  next();
});

app.get('/pokemon', (request, response) => {
  response.send('you made it');
});

app.listen(PORT, () => {
  console.log('Server listening');
});
