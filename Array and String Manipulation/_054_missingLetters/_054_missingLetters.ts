function missingLetters(missingLtrs: string): string {
  const ASCIIArr = [];
  let missingASCII;
  let missingLetter;

  // ASCII 97-122 lower case letters - charCodeAt
  for (let i = 0; i < missingLtrs.length; i++) {
    const currentLetter = missingLtrs.charAt(i);
    const currentASCII = currentLetter.charCodeAt(0);
    ASCIIArr.push(currentASCII);
  }

  console.log(ASCIIArr);

  for (let i = 1; i < ASCIIArr.length; i++) {
    if (ASCIIArr[i] - ASCIIArr[i - 1] !== 1) {
      missingASCII = ASCIIArr[i - 1] + 1;
      break;
    }
    missingASCII = undefined;
  }

  if (missingASCII) {
    missingLetter = String.fromCharCode(missingASCII);
  }

  return missingLetter;
}

function missingLettersEasierSolution(str: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const chars = str.split("");

  if (chars[0] !== "a") {
    return undefined;
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }
}

console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));

console.log(missingLettersEasierSolution("abce"));
console.log(missingLettersEasierSolution("abcdefghjklmno"));
console.log(missingLettersEasierSolution("abcdefghijklmnopqrstuvwxyz"));
