'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named isCapitalized that takes in a string. This function should use a regular expression pattern to match all words that begin with a capital letter. It should only match words, not punctuation.
Return an array containing all the matches.
------------------------------------------------------------------------------------------------ */

const isCapitalized = (str) => {
  // Solution code here...
  let pattern = /\b[A-Z].*?\b/g;

  // austins's solution
  let array = str.match(pattern);
  if (array) {
    return array;
  } else {
    return [];
  }
  // return array.filter(e => (e.charCodeAt(0) === e.toUpperCase().charCodeAt(0)) && !parseInt(e));
};

describe('Testing challenge 5', () => {
  test('It should only return words that begin with a capital letter', () => {
    const capitalResult = isCapitalized('We only want to Return the Words that begin With a capital Letter');

    expect(capitalResult).toStrictEqual(['We', 'Return', 'Words', 'With', 'Letter']);
    expect(capitalResult.length).toStrictEqual(5);

    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);

    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
});