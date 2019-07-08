function differentSymbolsNaive(s: string): number {
  let uniqueChars = [];

  const charArr = s.split("");

  for (let i = 0; i < charArr.length; i++) {
    if (!uniqueChars.includes(charArr[i])) {
      uniqueChars.push(charArr[i]);
    }
  }
  return uniqueChars.length;
}

// more efficient solution

function differentSymbolsObj(s: string): number {
  const uniqueChars = {};
  const inputChars = s.split("");

  inputChars.forEach(char => {
    uniqueChars[char] = 1;
  });

  return Object.keys(uniqueChars).length;
}

// even better way

function differentSymbolsSet(s: string): number {
  const uniqueChars = new Set();
  const inputChars = s.split("");
  for (let char of inputChars) {
    uniqueChars.add(char);
  }
  return uniqueChars.size;
}

const inputString = "cabca";
console.log(differentSymbolsNaive(inputString));
console.log(differentSymbolsObj(inputString));
console.log(differentSymbolsSet(inputString));
