const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

const luckyNumbers = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      process.stdout.write(matrix[i][j].toString());
    }
    console.log(`\n`);
  }
};

luckyNumbers(matrix);
