// tip: realize the modulus usage

function FizzBuzz(input: number): string[] {
  let output = [];
  for (let i = 1; i < input; i++) {
    if (i % 2 === 0) {
      output.push("Fizz");
    } else if (i % 3 === 0) {
      output.push("Buzz");
    } else if (i % 2 === 0 && i % 3 === 0) {
      output.push("FizzBuzz");
    } else {
      output.push(i);
    }
  }
  return output;
}

console.log(FizzBuzz(100));
