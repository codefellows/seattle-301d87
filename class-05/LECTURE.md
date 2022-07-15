# Class 05 - City Explorer Intro

## Warm Up

See warm up folder

## Code Review

Code Challenges.

Struggling with the new library (React).
Getting a handle on async stuff.

Filter our gallery by horn number.

## Array.reduce

Reduce method allows you to transform your data from an array into a new structure or value of your choosing.

- 2 parameters.
  - Callback function (2 params):
    - The initial data structure / value that you want to return.
    - An item from the array.
  - data structure or values to begin with.

```javascript

let numbers = [1,3,4,5,2,1,8,5,5];

let sum = numbers.reduce((sumSoFar, item) => {

  sumSoFar = sumSoFar + item;

  return sumSoFar;
}, 0);

console.log(sum);

let noDupes = numbers.reduce((numsSoFar, item) => {

  if (!numsSoFar.includes(item)) {
    numsSoFar.push(item);
  }

  return numsSoFar;
}, []); 

console.log(numbers, noDupes);

let people = [{name: 'Jacob', role: 'instructor'}, {name: 'Cameron', role: 'TA'}}];

// using the reduce method, create an array of just name values.
let names = people.reduce();

// ['Jacob', 'Cameron'];
```

## City Explorer App

City exploration app, that displays data about a specific city grabs data from various third party APIs (Application programming interface) -> remote server.

- Yelp: restaurants is a given city.
- LocationIQ: geolocation data.
- Weather: Weather Bit

Building the React Client today!

## Lab Prep: Portfolio Template Repo
