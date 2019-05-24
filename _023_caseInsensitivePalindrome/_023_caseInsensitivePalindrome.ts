function isCaseInsensitivePalindrome(input: string): boolean {
  const originalLowerCase = input.toLowerCase();
  const reversedWord = originalLowerCase
    .split("")
    .reverse()
    .join("");

  return originalLowerCase === reversedWord;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
