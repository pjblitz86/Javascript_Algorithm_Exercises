// with regex or if it's not allowed we loop and check against the collection of vowels

function countVowels(inputStr: string): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let character of inputStr.toLowerCase()) {
    if (vowels.includes(character)) {
      count++;
    }
  }

  return count;
}

// with regex
const _vowels = string => {
  let matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

console.log(countVowels("aaabbccc"));
