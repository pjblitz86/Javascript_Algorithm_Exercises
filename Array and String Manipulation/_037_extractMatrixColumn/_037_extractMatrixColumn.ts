function extractMatrixColumn(matrix, column): number[] {
  const columnArr: number[] = [];
  // old school with double for loops
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === column) {
        columnArr.push(matrix[i][j]);
      }
    }
  }

  // easier with forEach
  // matrix.forEach((row) => columnArr.push(row[column]));

  return columnArr;
}

const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
const column = 2;

console.log(extractMatrixColumn(matrix, column));
