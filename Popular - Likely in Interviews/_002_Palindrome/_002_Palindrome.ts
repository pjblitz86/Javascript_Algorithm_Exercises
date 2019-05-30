// No constraints of lowercase or input filters here

function isPalindrome(input: string): boolean {
  const inputBackwards = input
    .split("")
    .reverse()
    .join("");

  return input === inputBackwards;
}

console.log(isPalindrome("aba"));
