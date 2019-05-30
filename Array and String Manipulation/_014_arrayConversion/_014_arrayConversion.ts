function arrayConversion(inputArr: number[]): number {
  let isOdd = true;

  while (inputArr.length !== 1) {
    inputArr = sumProduct(inputArr, isOdd);
    isOdd = !isOdd;
  }
  return inputArr[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
  const sumProducts: number[] = [];

  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }
  return sumProducts;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrayConversion(inputArray));
