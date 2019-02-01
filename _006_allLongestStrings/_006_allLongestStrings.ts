// Traditional logic

// function allLongestStrings(inputArr: string[]): string[] {
//   let longestLength = 0;
//   const longestWords = [];

//   inputArr.forEach((word: string) => {
//     longestLength = longestLength < word.length ? word.length : longestLength;
//   });

//   inputArr.forEach((word: string) => {
//     if (word.length === longestLength) {
//       longestWords.push(word);
//     }
//   });

//   return longestWords;
// }

const input = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(input));

// Using reduce and filter => modern and cleaner
function allLongestStrings(inputArr: string[]): string[] {
  let longestString: string = inputArr.reduce((a, b) =>
    a.length > b.length ? a : b
  );

  return inputArr.filter(word => word.length === longestString.length);
}
