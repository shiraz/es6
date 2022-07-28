/*
This one is probably the hardest exercise in the entire course! 

Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will 
return a new array with all values inside of it multiplied by two.

Do not use any array helpers!

Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)
*/

const numbers = [1, 2, 3];

function double(numbers) {
  const [num, ...rest] = numbers;
  if (!num) {
    return [];
  } else {
    return [num * 2, ...double(rest)];
  }
}
