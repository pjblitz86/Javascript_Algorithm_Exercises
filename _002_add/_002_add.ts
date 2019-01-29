function Add2Numbers(num1: number, num2: number): number {
  return num1 + num2;
}

// traditional
function AddAllPassedNumbers(...nums: number[]): number {
  let sum = 0;
  nums.forEach(num => {
    sum += num;
  });
  return sum;
}

// with reduce
function AddManyNumbers(...nums: number[]): number {
  return nums.reduce((total, element) => (total += element));
}

console.log(Add2Numbers(1, 3));
console.log(AddAllPassedNumbers(1, 2, 3, 4));
console.log(AddManyNumbers(1, 2, 3, 4));
