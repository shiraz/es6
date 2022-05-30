/*
This is a hard one!  Create a function called 'reject'.  
Reject should work in the opposite way of 'filter' - if a function returns 'true', 
the item should *not* be included in the new array.  Hint: you can reuse filter.
*/

// function reject(array, iteratorFunction) {
//   const rejectedValues = [];
//   array.forEach(item => {
//   	const currentReturn = iteratorFunction(item);
//     if (!currentReturn) {
//       rejectedValues.push(item);
//     }
//   });
//   return rejectedValues;
// }

// function reject(array, iteratorFunction) {
//   return array.filter((item) => {
//     const currentReturn = iteratorFunction(item);
//     return !currentReturn;
//   });
// }

function reject(array, iteratorFunction) {
    return array.filter((item) => {
      return !iteratorFunction(item);
    });
}

var numbers = [10, 20, 30];

var lessThanFifteen = reject(numbers, function (number) {
  return number > 15;
});

lessThanFifteen; // [ 10 ];
