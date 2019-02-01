// classical for loop logic
function adjacentElementsProduct(inputArr: number[]): number {
  let largestProduct = inputArr[0] * inputArr[1];

  for (let i = 1; i < inputArr.length - 1; i++) {
    let product = inputArr[i] * inputArr[i + 1];

    if (product > largestProduct) {
      largestProduct = product;
    }
  }
  return largestProduct;
}

let inputArray = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(inputArray));

// with map and filter
// function adjacentElementsProduct(inputArr: number[]): number {
//   const productArray: number[] = inputArr
//     .map((num, index) => {
//       if (index < inputArr.length - 1) {
//         return num * inputArr[index + 1];
//       }
//     })
//     .filter(num => num !== undefined);
//   return Math.max(...productArray);
// }
