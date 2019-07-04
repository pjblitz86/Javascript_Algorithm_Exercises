function crossingSumWithFor(matrix, a, b) {
  let sum = 0;
  for (let i = 0; i < matrix[a].length; i++) {
    sum += matrix[a][i];
  }

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][b];
  }

  sum -= matrix[a][b];

  return sum;
}

const matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]];
const a = 1;
const b = 3;

console.log(crossingSumWithFor(matrix, a, b));
