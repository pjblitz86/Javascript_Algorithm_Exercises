// can be solved numerous ways

function containsDuplicates(arr: number[]): boolean {
  let sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1]) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
