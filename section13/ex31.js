/*
Refactor the following to use the only the rest operator.
*/

/*
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/

function unshift(array, ...items) {
  return [...items, ...array];
}
