'use strict';

const numbers = [4, 6, 10, 3, 8, 5, 1];
console.log(numbers);

// Sorts an array IN PLACE => mutates the original array instead of making a new one
numbers.sort((a, b) => {
  if (a > b) {
    return 1; // return 1 or more will move a after b
  } else if (a === b) {
    return 0; // keep both items in the same position
  } else {
    return -1; // b moves after a.
  }
});

console.log(numbers);


const names = [{name: 'Jacob'}, {name: 'Cameron'}];

names.sort((a, b) => {
  console.log(a.name.charCodeAt(0), b.name.charCodeAt(0));
  if (a.name.charCodeAt(0) < b.name.charCodeAt(0)) {
    return -1;
  } else if (a.name.charCodeAt(0) === b.name.charCodeAt(0)) {
    return 0;
  } else {
    return 1;
  }
});

console.log(names);
