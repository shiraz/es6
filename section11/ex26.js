/*
Refactor to use enhanced literal notation.
*/

//const color = 'red';

// const Car = {
//   color: color,
//   drive: function () {
//     return 'Vroom!';
//   },
//   getColor: function () {
//     return this.color;
//   },
// };

const Car = {
  color: 'red',
  drive: () => {
    return 'Vroom!';
  },
  getColor: function () {
    return this.color;
  },
};
