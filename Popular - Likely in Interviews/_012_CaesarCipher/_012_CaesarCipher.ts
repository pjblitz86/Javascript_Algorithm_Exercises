function caesarCipher(s: string, shift: number): string {
  let encodedLetterArr: string[] = [];
  // total 26 chars
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let index = alphabet.indexOf(letter) + (shift % 26);
    if (index > 25) {
      index -= 26;
    }
    if (index < 0) {
      index += 26;
    }
    encodedLetterArr.push(alphabet[index]);
  }
  return encodedLetterArr.join("");
}

const inputString = "abc";
const letterShift = 4;

console.log(caesarCipher(inputString, letterShift));
