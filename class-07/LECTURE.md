# Class - HTTP Servers with Express Framework

## Warm Up

It creates 20 random numbers, and tallys the number of even and odd values, and prints them to the console.

## Code Review

- Getting location data from locationIQ in a react component/app.
- Trevor: making an error message.
  - Using a try / catch statement.
  - Jacob: very similar to `.then().catch()`.

## Array and String Methods ( split, join, splice, slice )

All of these methods involve creating and dissecting substrings or sub arrays.

- split: string method, creates an array from the provided string
  - 1 param: character delimeter:

```javascript
let sentence = 'Jacob is awesome';

let array = sentence.split(' '); // ['Jacob', 'is', 'awesome'];
```

- join: is a array method, joins the elements in an array, converting them to a string.
  - 1 param: character to add between indices.

```javascript

let array = ['Jacob', 'is', 'awesome'];

let string = array.join('-'); // 'Jacob-is-awesome';

```

- slice: creates a sub array or substring
  - 2 params: start index, end index

```javascript

let string = 'hello class!';

let hello = string.slice(3, 5); // 'lo'

let array = ['he', 'll', 'o ', 'cla', 'ss'];

let smallerArray = array.slice(0, 3); // ['he', 'll', 'o '];

let helloWithSpace = smallerArray.join();

```

- Splice: replace parts of an array with values
  - 3 params: start index, # of items to remove / replace, optional replacement value.

```javascript


let array = [1, 2, 3, 4, 5];

let removedItems = array.splice(0, 2, 6, 7); // [6, 7, 3, 4, 5];

array.splice(0, 2); // [3, 4, 5];

array.splice(0, 0, 6, 7); // [6,7,1,2,3,4,5]

```

## Express HTTP Framework

HTTP Rest Framework: creating HTTP server endpoints

- configure a verb and a path, and define a function to run when the server receives the request that matches the verb and path.
- Un-opinionated (outside to capturing an HTTP request the world is your oyster).

### Heroku (SAAS Platform)

- Deployment service for Node (Express Application).

## Lab Prep: Yelp API Keys / weather data.
