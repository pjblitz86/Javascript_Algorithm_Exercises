function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  let outputArr: number[] = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      outputArr.push(substitutionElem);
    } else {
      outputArr.push(inputArray[i]);
    }
  }

  return outputArr;
}

const inputArray = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;
console.log(arrayReplace(inputArray, elemToReplace, substitutionElem));
