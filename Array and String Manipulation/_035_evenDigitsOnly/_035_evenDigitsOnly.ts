function evenDigitsOnly(inputNumber: number): boolean {
  let digitArr = inputNumber.toString().split("");

  return digitArr.every(digit => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
