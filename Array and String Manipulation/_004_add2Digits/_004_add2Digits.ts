function add2Digits(twoDigitNumber: number): number {
  let splittedNumber = twoDigitNumber
    .toString()
    .split("")
    .map(Number);
  let addition = splittedNumber.reduce((sum, element) => sum + element);
  return addition;
}

console.log(add2Digits(29));
