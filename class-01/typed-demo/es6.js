'use strict';

// fat arrow functions???
//  like a short form way to create functions (limitations???)

//  don't use in constructors. => no 'binding' of this.
//    let's developers control what 'this' is.

function sayName(name) {
  console.log(name);
}

const greet = (name) => {
  console.log(name);
};

const add = (a, b) => a + b; // implicit return with no curly braces after the arrow.

// use whenever, but very important to use in Constructor (and Classes)
function addAgain(a, b) {
  return a + b;
}


function Mammal () {}

// es6 classes
function Animal(name) {
  this.name = name;
}

Animal.prototype = Mammal.prototype;

Animal.prototype.speak = function () {
  console.log(this.name);
};

// creates animal objects with a name property.
let cat = new Animal('percy');
cat.speak();

class Cat extends Mammal {
  constructor(name) {
    super(name); // passes values to the inherited class
    this.name = name;
  }

  speak() {
    console.log(this.name);
  }
}

let bob = new Cat('bob');
bob.speak();
