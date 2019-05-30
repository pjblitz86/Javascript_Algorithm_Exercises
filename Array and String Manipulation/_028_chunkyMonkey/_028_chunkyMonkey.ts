function chunkyMonkey(inputArr: any[], size: number): [][] {
  let returnedArr = [];
  let count = 0;
  while (count < inputArr.length) {
    returnedArr.push(inputArr.slice(count, (count += size)));
  }

  return returnedArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
