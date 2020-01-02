// old school messy solution
function longestDigitsPrefix(inputString: string): string {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inputChars = inputString.split("");
  const prefixArr = [];

  for (const char of inputChars) {
    if (!digits.includes(char)) {
      break;
    }
    prefixArr.push(char);
  }
  return prefixArr.join("");
}

// refactored clearer solution
function longestDigitsPrefix2(inputString: string): string {
  const inputChars: string[] = inputString.split("");
  let prefix: string = "";

  for (const char of inputChars) {
    const num = parseInt(char);
    if (isNaN(num)) {
      break;
    } else {
      prefix += char;
    }
  }
  return prefix;
}

console.log(longestDigitsPrefix("123aa1"));
console.log(longestDigitsPrefix2("123aa1"));
