function isLucky(num: number): boolean {
  const numStr = num.toString();
  const firstHalfArr = numStr.substring(0, numStr.length / 2).split("");
  const secondHalfArr = numStr.substring(numStr.length / 2).split("");

  let firstHalfSum = 0;
  let secondHalfSum = 0;

  for (let num of firstHalfArr) {
    firstHalfSum += +num;
  }

  for (let num of secondHalfArr) {
    secondHalfSum += +num;
  }

  return firstHalfSum === secondHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
