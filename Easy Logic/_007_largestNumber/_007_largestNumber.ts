function largestNumber(digits: number): number {
  let maxSingleDigitNumber = "9";
  let maxNumber = "";

  for (let i = 0; i < digits; i++) {
    maxNumber += maxSingleDigitNumber;
    // maxNumber = maxNumber.concat(maxSingleDigitNumber); could be used as well but += is faster
  }

  // or use this
  // '9'.repeat(digits);

  return parseInt(maxNumber);
}

console.log(largestNumber(2));
console.log(largestNumber(4));
