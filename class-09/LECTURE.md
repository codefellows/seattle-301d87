# Class 09 - Advanced Topics: Refactoring Code, 

## Warm Up

Python binary search!

## Code Review

### Regex

Pattern matching in strings!

- `\b`: word boundaries:
  - characters at the beginning of strings.
  - Characters at the end of strings.
  - Characters surrounded by a space character and non space characters.
- `.`: wildcard, matches any non terminating characters (line breaks, carriage returns).
- `*`: greedy quantifier, grab all preceding patterns 1 or more times.
- `?`: combined with the `*`, matches 0 or more times (lazy).

## Static Object Methods

Static - doesn't change (method that lives on the constructor no the object that a constructor).

```javascript

let person = {
  name: 'jacob',
  age: 31,
  role: 'instructor',
}

person.speak() // non static

// grab all keys from a provided object
Object.keys(person); // returns an array filled with the keys of a given object


Object.keys(person).forEach(key => {
  person[key]; // read the value at a given key.
});

// grabs all the values from a provided object
Object.values(person); // ['Jacob', 31, 'instructor'];


Object.entries(person); // gives a 2d array, each sub array contains the key and the value at index 0 and 1 respectively.

// [['name', 'jacob'], ['age', 31], ['role', 'instructor']];


let forecast = {
  day: 'Thursday',
  data: [
    'cloudy',
    'windy',
    'rainy',
  ]
} 

Object.entries(forecast);
[
  ['day', 'thursday'],
  ['data', ['cloudy', 'windy', 'rainy']]
]

```

## Promises

What is a Promise?  A new-fangled es6 feature for handling async code (code that does something that takes a while, and we don;t want to block the rest of our program).

- Promises allow use to delay the returning of a value within a function.

```javascript

function wait(value, time) {
  return new Promise((resolve, reject) => {
    if(value === 'error') {
      reject();
    }
    setTimeout(() => {
      console.log(`I have waited ${time} milliseconds`);
      resolve();
    }, time);
  });
}

wait()
.then(() => {
  console.log('I have finished successfully');
})
.catch(() => {
  console.log('something went wrong');
});

// Promise.all -> takes an array of promise functions, are resolves only after all promises are done.


// Static method on the Promise constructor.
  // fill your array with Promises, not functions.
Promise.all([wait(null, 2000), wait(null, 5000)]).then(() => {
  console.log('all promises fullfilled');
});
```

### Fizz Buzz Promise Function

```javascript

// Takes in a number, if the number is divisible by 3 => wait 3 seconds to resolve the promise, if divisible by 5, wait 5 seconds to resolve the promise, if divisible by 3 and 5, reject the promise and console.log "fizzbuzz".

function fizzBuzzPromise(number) {

}

```

## Refactoring

Instead of adding features or changing the code output, we want the same thing just re-written to focus on the following:
- Maintenance, Scale, Readability.