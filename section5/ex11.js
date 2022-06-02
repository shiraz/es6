/*
This is a tough one!  The most common find operation is to an object that has a given property.  
Rather than writing out a full function every time, it would be great if we has a shorthand syntax to find an object like this:

findWhere(ladders, { height: '20 feet' });

The object { ladders: '20 feet' }  should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet';
*/

function findWhere(array, criteria) {
  var criteriaKeys = Object.keys(criteria);
  return array.find((item) =>
    criteriaKeys.every((key) => item[key] === criteria[key])
  );
}

// const ladders = [
//   { height: '2' },
//   { height: '3 ft' },
//   { height: '20 feet', name: 'y' },
//   { height: '100 meters' },
//   { height: '20 feet', name: 'test' },
// ];

// const x = findWhere(ladders, { height: '20 feet', name: 'test' });

// x;
