function extractEachKth(inputArr: number[], k: number): number[] {
  return inputArr.filter((el, index) => (index + 1) % k !== 0);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;

console.log(extractEachKth(inputArray, k));
