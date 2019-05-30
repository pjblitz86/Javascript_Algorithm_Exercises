// function almostIncreasingSequence(sequenceArr: number[]): boolean {
//   let count = 0;

//   for (let i = 0; i < sequenceArr.length; i++) {
//     if (sequenceArr[i] <= sequenceArr[i - 1]) {
//       count++;
//       if (
//         sequenceArr[i] <= sequenceArr[i - 2] &&
//         sequenceArr[i + 1] <= sequenceArr[i - 1]
//       ) {
//         return false;
//       }
//     }
//   }
//   return count <= 1;
// }

const sequence1 = [1, 3, 2, 1];
const sequence2 = [1, 3, 2];

console.log(almostIncreasingSequence(sequence1));
console.log(almostIncreasingSequence(sequence2));

// reduce - much awesomer
function almostIncreasingSequence(sequenceArr: number[]): boolean {
  let count = 0;
  sequenceArr.reduce((a: number, b: number) => {
    if (a >= b) {
      count++;
      return b;
    }
    return b;
  });
  return count <= 1;
}
