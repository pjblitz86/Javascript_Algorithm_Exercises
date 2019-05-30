function companyBotStrategy(data: number[][]): number {
  let answerTime = 0;
  let correctness = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][1] === 1) {
        correctness++;
        answerTime += data[i][0];
      }
    }
  }

  return correctness === 0 ? 0 : answerTime / correctness;
}

const trainingData1 = [[3, 1], [6, 1], [4, 1], [5, 1]];
const trainingData2 = [[4, 1], [4, -1], [0, 0], [6, 1]];
const trainingData3 = [[4, -1], [0, 0], [5, -1]];

console.log(companyBotStrategy(trainingData1));
console.log(companyBotStrategy(trainingData2));
console.log(companyBotStrategy(trainingData3));
