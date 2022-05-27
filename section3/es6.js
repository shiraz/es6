/*
Implement a 'pluck' function.
Pluck should accept an array and a string representing a property name and return an  
array containing that property from each object. 
*/

function pluck(array, property) {
    return array.map(item => item[property]);
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

const test = pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];
test;