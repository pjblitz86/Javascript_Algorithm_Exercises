function charCount(input: string): object {
  const table = {};
  for (let char of input.replace(/\W/g, "").toLowerCase()) {
    table[char] = table[char] + 1 || 1;
  }
  return table;
}

function isAnagram(input1: string, input2: string): boolean {
  const charCount1 = charCount(input1);
  const charCount2 = charCount(input2);

  if (Object.keys(charCount1).length !== Object.keys(charCount2).length) {
    return false;
  }

  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("hello world", "world hello"));
console.log(isAnagram("aaa", "aa"));
console.log(isAnagram("b aa", "aa b"));
