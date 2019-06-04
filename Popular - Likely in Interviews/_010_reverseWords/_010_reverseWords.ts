function reverseWords(input: string): string {
  let wordsReversed = [];

  input.split(" ").forEach(word => {
    let wordReversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      wordReversed += word[i];
    }
    wordsReversed.push(wordReversed);
  });

  return wordsReversed.join(" ");
}

// newer
const _reverseWords = string =>
  string
    .split(" ")
    .map(word =>
      word
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");

console.log(reverseWords("I love JavaScript!"));
console.log(_reverseWords("I love JavaScript!"));
