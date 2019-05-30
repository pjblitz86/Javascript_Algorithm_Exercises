function compareIntegers(inputString1: string, inputString2: string): string {
  // TRADITIONAL
  // const number1 = parseInt(inputString1);
  // const number2 = parseInt(inputString2);

  // if (number1 < number2) {
  //   return "less";
  // } else if (number1 > number2) {
  //   return "more";
  // } else if (number1 === number2) {
  //   return "equal";
  // }

  // on 1 line with double ternary operator
  return parseInt(inputString1) > parseInt(inputString2)
    ? "greater"
    : parseInt(inputString1) < parseInt(inputString2)
    ? "less"
    : "equal";
}

console.log(compareIntegers("12", "13"));
console.log(compareIntegers("875", "799"));
console.log(compareIntegers("1000", "1000"));
