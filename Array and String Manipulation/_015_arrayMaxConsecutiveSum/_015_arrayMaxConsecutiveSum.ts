function arrayMaxConsecutiveSum(inputArr: number[], el: number): number {
  let maxConsecutiveSum = 0;
  const index = inputArr.indexOf(el);

  for (let i = index; i < inputArr.length; i++) {
    let consecutiveElSum = inputArr[i] + inputArr[i + 1];
    if (consecutiveElSum > maxConsecutiveSum) {
      maxConsecutiveSum = consecutiveElSum;
    }
  }

  return maxConsecutiveSum;
}

// const inputArray = [2, 3, 5, 1, 6];
const inputArray = [1, 2, 3, 4, 5, 6];
const element = 2;

console.log(arrayMaxConsecutiveSum(inputArray, element));
