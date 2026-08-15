const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(toSum) {
  return toSum.reduce((total, number) => total + number, 0);
};

const multiply = function(toMultiply) {
  return toMultiply.reduce((total, number) => total * number, 1);
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(number) {
  let product = 1;
	for (let i = 2; i < number+1; i++) {
    product *= i;
  };
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

console.log(sum([2,43,43]));