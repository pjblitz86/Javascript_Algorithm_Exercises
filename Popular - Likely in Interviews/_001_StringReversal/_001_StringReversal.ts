// the "reverse" trick otherwise we would have to play old school with for loops

function reverseString(inputStr: string): string {
  return inputStr
    .split("")
    .reverse()
    .join("");
}

// with reduce
// function reverseString(inputStr: string): string {
//   return inputStr.split("").reduce((result, character) => character + result);
// }

console.log(reverseString("abc"));
