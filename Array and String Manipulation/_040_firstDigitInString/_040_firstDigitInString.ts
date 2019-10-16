function firstDigit(inputString: string): string {
  const inputArr = inputString.split("");

  for (let i = 0; i < inputArr.length; i++) {
    if (!isNaN(+inputArr[i])) {
      return inputArr[i];
    }
  }
  return "no digit found";
}

console.log(firstDigit("var_1__Int"));
console.log(firstDigit("q2q-q"));
console.log(firstDigit("0ss"));
