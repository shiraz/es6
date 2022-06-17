function balancedParens(str) {
  return !str.split('').reduce(function (accumulator, currentChar) {
    if (accumulator < 0) {
      return accumulator;
    }
    if (currentChar === '(') {
      return ++accumulator;
    }
    if (currentChar === ')') {
      return --accumulator;
    }
    return accumulator;
  }, 0);
}

console.info(balancedParens('()'));
