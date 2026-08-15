const fibonacci = function(nthTerm) {
  const fibonacciList = [0, 1];
  if (nthTerm < 0) return "OOPS"
  else if (nthTerm <= 1) return fibonacciList[nthTerm];

  for (i = 0; i < nthTerm-1; i++) {
    fibonacciList.push(fibonacciList[fibonacciList.length-1] + fibonacciList[fibonacciList.length-2])
  };

  return fibonacciList[nthTerm];
};

module.exports = fibonacci;