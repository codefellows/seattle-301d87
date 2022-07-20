'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/bananas', (request, response) => response.send('bananas are great'));

app.listen(3001);
