const assertEqual = require('../assertEqual');
const head = require('../head');


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(5, head(["now", "is"]));
assertEqual(1, head([true, 2, 3]));
assertEqual("big", head(["", "bigger", "biggest"]));
assertEqual("lower", head([]));
