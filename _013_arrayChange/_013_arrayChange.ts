function arrayChange(inputArr: number[]): number {
  let count = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] >= inputArr[i + 1]) {
      const difference = inputArr[i] + 1 - inputArr[i + 1];
      inputArr[i + 1] = inputArr[i] + 1;
      count += difference;
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1, 1, 2]));
