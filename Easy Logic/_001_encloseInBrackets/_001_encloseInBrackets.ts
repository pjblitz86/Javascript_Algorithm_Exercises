function encloseInBrackets(input: string): string {
  let newString = `(${input})`;
  return newString;
}

const inputString = "abacaba";
console.log(encloseInBrackets(inputString));
