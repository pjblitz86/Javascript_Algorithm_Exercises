function maxMultiple(divisor: number, bound: number): number {
  let largestN = 1;

  while (largestN * divisor <= bound) {
    largestN *= divisor;
    console.log(largestN);
  }

  return largestN;
}

function maxMultipleEasierSolution(divisor: number, bound: number): number {
  let remainder = bound % divisor;
  return bound - remainder;
}

console.log(maxMultiple(3, 10));
console.log(maxMultipleEasierSolution(3, 10));
