const sumAll = function(num1, num2) {
  if ((num1 < 0 || Number.isInteger(num1) === false) || (num2 < 0 || Number.isInteger(num2) === false)) {
    return "ERROR";
  };
  
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  };

  const rangeOfNumbers = [];
  for (num1; num1 <= num2; num1++) {
    rangeOfNumbers.push(num1);
  };

  return rangeOfNumbers.reduce((total, number) => total += number, 0);
};

module.exports = sumAll;

console.log(sumAll(1, 4));
