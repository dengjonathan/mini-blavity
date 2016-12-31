module.exports = function fibonacciMemo (n) {
  const memo = [1, 1];
  const innerFibonacci = n => {
    return memo[n - 1] || innerFibonacci(n - 1) + innerFibonacci(n - 2);
  };
  return innerFibonacci(n);
};

