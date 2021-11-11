const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test
assertEqual(eqArrays([1, 2, 3, 'a'], [1, 2, 3, 'a']), true);