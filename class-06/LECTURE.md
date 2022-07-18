# Class 06 - Asynch Code and Remote APIs

## Announcements

* Career Coaching assignments due
  * Accountability Partners
  * Growing your network
    * This week on Wednesday - what to do post bootcamp (5 - 6 PM PST), eventbrite.

## Warm Up

## Review

Introduction to React

* Component Props and State.
  * Props: Action or value that you want to pass to another child component.
  * State: Object that contains value important to a component, should be managed by that component.
  * forEach / map (array methods)
    * forEach: the same as a for loop.  Read every value in an array.
    * map: reading elements in an array.  Maps the value (and potentially change the value) and place into a new array.
  * WRRC:  Web Request Response Cycle.
    * displays how a client and server interface (or communicate) with each other.
    * Request: Comes from the client, object that contains info for data that the client needs from the server.
    * Response: Contains a body with resource requested, message / statusCode, related links etc.... Comes from the Server.

## Pass By Reference VS Pass by Value

What exactly happens when we create a variable.

`let number = 37`

The JS engine creates some space in memory for the number 37, and we a get a variable to reference that number.

`let alsoNumber = number`

```javascript

let person = {
  name: 'Jacob',
  role: 'Instructor'
}

let alsoPerson = person;
// let newPerson = {...person}; // shallow copy
alsoPerson.name = 'Cameron';

console.log(person); // {name: 'Cameron', role: 'instructor'};

```

In functional programming - Pure modification (as little mutations as possible).

```javascript

// Write a function that takes in 3 parameters an object, key, value.  If the key exists on the object, mutate that object and change the value of the key to the given value.  If it doesn't exist mutate the object, and create the key value on that new object.

// let person = {name: 'Jacob', role: 'instructor'}

const one = {role: 'instructor'};
const two = {name: 'Jacob'};
console.log(${one.role});

// updateObject(person, 'name', 'Cameron');
// console.log(person) => {name: 'Cameron', role: 'instructor'}

// let newPerson = updateObject(person, 'age', 31);
// console.log(person) should produce this in our console -> {name: 'Jacob', role: 'instructor'}
// console.log(newPerson) should produce this in our console -> {name: 'Jacob', role: 'instructor', age: 31};


let person = {
  name: 'tony',
  age: 26,
};

let newPerson = person; // creating a new reference to person called newPerson
newPerson.group = 'American' // mutating the person object, adding a property called group.

console.log(newPerson, person) // {name, age, group}

function updateObject(object, key, value) {
  // does key exist on object?
  if (object[key]) {
    object[key] = value;
    return object;
  } else {
    // create something new, using the key value pairs from old object.
    let output = {...object};
    output[key] = value;
    return output;
  }
} 


updateObject(person, 'group', 'American');
console.log(person);
```

## Async Code (Web Requests)

In JS runtime, code runs synchronously on a single thread.  At certain points our runtime doesn't know how long something is going to take to complete.
*  setTimeout() - delays code executiong

In order not to delay other code below, JS can run function asynchronously.\
* Event Loop: a strcture built into our runtime to handle things that could block code below others.

### DEMO: Fetching PokeAPI data

Let's fetch some data about Pokemon