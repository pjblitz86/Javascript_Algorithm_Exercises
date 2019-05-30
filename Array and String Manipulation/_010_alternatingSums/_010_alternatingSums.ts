function alternatingSums(weigthtsArr: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  weigthtsArr.forEach((element, index) => {
    if (index % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  });
  return [evenSum, oddSum];
}

const peopleWeights = [50, 60, 60, 45, 70];
console.log(alternatingSums(peopleWeights));
