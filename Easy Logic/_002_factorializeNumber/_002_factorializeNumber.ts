function factorializeANumber(num: number): number {
  // with recursion (ma fav)

  if (num === 0) {
    return 1;
  }
  return num * factorializeANumber(num - 1);

  // old school with for loop
  // let total = 1;
  // for(let i = 1; i <= num; i++) {
  //   total *= i;
  // }
  // return total;
}

console.log(factorializeANumber(5));
