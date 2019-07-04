function depositProfit(deposit: number, rate: number, threshold: number) {
  let yearsToReach = 0;

  while (deposit < threshold) {
    deposit *= 1 + rate / 100;
    yearsToReach++;
  }
  return yearsToReach;
}

const deposit = 100;
const rate = 20;
const threshold = 170;

console.log(depositProfit(deposit, rate, threshold));
