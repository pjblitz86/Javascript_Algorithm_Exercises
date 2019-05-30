function candies(numChildren: number, numCandy: number): number {
  let candyPerChild = Math.floor(numCandy / numChildren);
  let numEatenCandies = candyPerChild * numChildren;
  return numEatenCandies;
}

console.log(candies(3, 10));
