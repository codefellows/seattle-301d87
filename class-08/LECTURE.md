# Class 08 - Remote APIs

## Warm Up

## Code Review

- Starting the server on a port.
  - `npm start` - what happens??
- .env file (environment dependant variables)
  - hidden / different depending on where our code.
- `require()` - function from Node.
- Express Server setup requirements.

```javascript

class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}

```

## Querying Photos using the Unsplash API.