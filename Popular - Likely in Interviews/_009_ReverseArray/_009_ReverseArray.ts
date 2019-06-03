// traditional method with for loop, dividing arr in 2 and using temp variable.

function reverseArray(inputArr: any[]): any[] {
  for (let i = 0; i < inputArr.length / 2; i++) {
    const temp = inputArr[i];
    inputArr[i] = inputArr[inputArr.length - 1 - i];
    inputArr[inputArr.length - 1 - i] = temp;
  }
  return inputArr;
}

// with backwards for loop and push; can also be done with unshift with asc for loop
function _reverseArray(inputArr: any[]): any[] {
  let newArr = [];
  for (let i = inputArr.length - 1; i >= 0; i--) {
    newArr.push(inputArr[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(_reverseArray([1, "4", "b", false]));
