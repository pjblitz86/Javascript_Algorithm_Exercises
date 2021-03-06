function digitDegree(n: number): number {
  let count = 0;
  let currentNumber = n;
  if (n < 10) {
    return count;
  } else {
    while (true) {
      count++;
      currentNumber = getDigit(currentNumber);
      if (currentNumber < 10) {
        return count;
      }
    }
  }
}

function getDigit(num: number) {
  const nums: number[] = num
    .toString()
    .split("")
    .map(el => parseInt(el));

  return nums.reduce((a, b) => {
    return a + b;
  });
}

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));
