# Warm-Up Exercise

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js

require('dotenv').config(); // Read from our .env file
const express = require('express'); // require the express library, maybe more things...
const axios = require('axios').default; // from the docs
const cors = require('cors');
const app = express();

// const cors = ('cors');
app.use(cors()); // we need to invoke cors, instead of passing a string.

// const axios = ('axios'); // axios is undefined until required

const PORT = process.env.PORT;

app.get('/books', getBooks);

function getBooks(request, response) {
  // const results = await axios.get(url);
  // response.status(400).send(results.data);
  let url = process.env.BOOK_URL;//?????
  axios
    .get(url) // where is this defined???
    .then(results => {
      response.status(200).send(results.data); // swap status codes
    });
}

// either listen at the bottom or export the app (modularize).
app.listen(PORT, () => console.log('Server running'));
```
