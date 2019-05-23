function avoidObstacles(inputArr: number[]): number {
  inputArr = inputArr.sort();
  const largestArrayVal = inputArr[inputArr.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArr.every(element => element % i !== 0)) {
      return i;
    }
  }
}

const inputArray = [5, 3, 6, 7, 9];
console.log(avoidObstacles(inputArray));
