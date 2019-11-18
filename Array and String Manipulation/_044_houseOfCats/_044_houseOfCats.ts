function houseOfCats(legs: number): number[] {
  let personArr: number[] = [];

  if (legs === 2) {
    return [1];
  }

  while (legs >= 0) {
    personArr.unshift(legs / 2);
    legs -= 4;
  }

  return personArr;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
