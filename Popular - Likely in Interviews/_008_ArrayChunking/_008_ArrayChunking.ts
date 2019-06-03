function chunkArray(inputArr: any[], chunkSize: number): any[][] {
  let outputArr = [];
  let count = 0;

  while (count < inputArr.length) {
    outputArr.push(inputArr.slice(count, (count += chunkSize)));
  }

  return outputArr;
}

const arr = [1, 2, 3, 4];
console.log(chunkArray(arr, 2));
console.log(chunkArray(arr, 3));
console.log(chunkArray(arr, 5));
