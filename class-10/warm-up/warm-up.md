# Warm-Up Exercise

Read through this code as if you are the interpreter. Find all of the mistakes in this code and write down the correct syntax for each mistake.

## server.js

```js
const express = require(express);

// 2 params, path and callback function
// 
app.get('username', req, res => {
  const userInfo = {};

  userInfo.name: request.username
  userInfo.password: request.password

  response.send(info)
})

app.listen(() => "Listening on Port 3000");
```

* bug fixes

```javascript

const app = express(); // => singleton (object)

require('express'); // use quotes for the require

// choose a variable name for request and response!


// what is info? => userInfo

// choose a correct syntax to add values to your object.

// read username and password off of the request query??

// add a port to the listen method.

// add forward slash to route path

// wrap our callback params in parenthesis

// most likely want to console log the string in app.listen
```
