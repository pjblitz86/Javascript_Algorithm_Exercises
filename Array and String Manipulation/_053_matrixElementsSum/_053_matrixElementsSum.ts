function matrixElementsSum(matrix: number[][]): number {
  let priceTotal = 0;
  const bannedIndex: number[] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        bannedIndex.push(j);
      } else if (bannedIndex.indexOf(j) === -1) {
        priceTotal += matrix[i][j];
      }
    }
  }

  return priceTotal;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
];

console.log(matrixElementsSum(matrix));
