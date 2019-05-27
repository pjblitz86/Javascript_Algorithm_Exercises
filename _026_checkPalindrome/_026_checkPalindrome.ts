function checkPalindrome(input: string): boolean {
  const originalWord = input.toLowerCase();
  const reversedWord = originalWord
    .split("")
    .reverse()
    .join("");

  return originalWord === reversedWord;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));
