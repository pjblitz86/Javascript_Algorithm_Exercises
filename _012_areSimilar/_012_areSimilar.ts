function areArraysSimilar(arr1: number[], arr2: number[]): boolean {
  const arrA: number[] = [];
  let arrB: number[] = [];

  if (arr1.toString() === arr2.toString()) {
    return true;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      arrA.push(arr1[i]);
      arrB.push(arr2[i]);
    }
  }

  arrB = arrB.reverse();

  if (arrA.length === 2 && arrA.toString() === arrB.toString()) {
    return true;
  }

  return false;
}

console.log(areArraysSimilar([1, 2, 3], [1, 2, 3]));
console.log(areArraysSimilar([1, 2, 3], [2, 1, 3]));
console.log(areArraysSimilar([1, 2, 2], [2, 1, 1]));
