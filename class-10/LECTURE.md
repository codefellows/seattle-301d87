# Class 10: In Memory State / Persistence

## Announcements

401 entrance Exam - This happens in 1 week.
* Not multiple choice / given a front and React Project and a Backend Express Server. Fix the bugs complete some feature tasks.
* Passing tests both server side and client side.
* Retakes are allowed.
* I will be available to answer questions / debug.
* 80 percent required to pass.
* 5 hours (1 - 6 PM PST).

## Warm Up

## Code Review

Object Methods.
  * Looks at challenge 5 / 6.

```javascript
/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
You are given an object with names and their corresponding phone numbers that looks like this:
{
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
}
HR has asked you to change the data to make it easier to print so that it looks like this:
[
  'Grace Hopper: 222-303-5938',
  'Ada Lovelace: 222-349-9842',
  'Alan Turing: 222-853-5933'
]
------------------------------------------------------------------------------------------------ */

const updateNumbers = (obj) => {
  // Solution code here...
  let results = [];

  let numbers = Object.values(obj); // => ['222-303-5938', '222-349-9842', '222-853-5933'];
  let names = Object.keys(obj); // => ['Grace Hopper, 'Ada Lovelace', 'Alan Turing'];
  for (let i=0; i < names.length; i++) {
    results.push(`${names[i]}: ${numbers[i]}`);
  }


  for (const [key, value] of Object.entries(obj)){
    results.push(`${key}: ${value}`);
  }
  return results;


  return Object.entries(obj).map(el => `${el[0]}: ${el[1]}`);

  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let result = [];
  for (let i = 0; i < keys.length; i++) {
    result[i] = keys[i] + ': ' + values[i];
  }
  return result;

};

```

```javascript

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

/*------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.
This function should take in an array of data and a character name and return a Boolean.
For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  // Solution code here...
  // read the characters
  let characterFromArr = arr.find(person => person.name == character);

  for (let char of arr) {
    if (char.name == character) {
      characterFromArr = char;
    }; // { name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark' }
  }

  return !!(Object.values(characterFromArr).length > 3);
};

```

### Lab Review

Lab 8 - backend and frontend are talking to each other.
  * Environment Variables.
  * Localhost client is communicating with Heroku server, but deployed Client on Netlify not talking to Heroku.

## Stateless Servers / Data Persistence


