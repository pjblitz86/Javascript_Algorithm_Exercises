function capitalizeWords(input: string): string {
  let words = [];

  for (let word of input.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

console.log(capitalizeWords("hello world"));
