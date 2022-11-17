const factorial = (n) => {
  if (n <= 0) {
    // throw new Error("Cannot calculate factorial of less than 0");
    return;
  } else if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// const factorial = (n) => (n === 1 ? 1 : n * factorial(n - 1)); // SLIMLINE VERSION WITHOUT THROWING ERROR

console.log(factorial(4)); // expect 24
console.log(factorial(2)); // expect 2
console.log(factorial(-7)); // expect undefined
console.log(factorial(0.5)); // expect 0.886...
console.log(factorial(12)); // expect 479,001,600
