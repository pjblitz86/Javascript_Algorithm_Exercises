function arrayMaximalAdjacentDifference(inputArr: number[]): number {
  let maxAdjacentAbsDifference = 0;

  for (let i = 0; i < inputArr.length; i++) {
    let adjacentDifference = Math.abs(inputArr[i] - inputArr[i + 1]);
    if (adjacentDifference > maxAdjacentAbsDifference) {
      maxAdjacentAbsDifference = adjacentDifference;
    }
  }

  return maxAdjacentAbsDifference;
}

let array = [2, 4, 1, 0];
// let array = [1, 2, 3, 4, 6, 9];
console.log(arrayMaximalAdjacentDifference(array));
