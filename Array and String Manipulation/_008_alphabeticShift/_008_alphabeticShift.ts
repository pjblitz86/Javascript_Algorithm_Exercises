function alphabeticShift(inputString: string): string {
  let inputArray = inputString.split("");
  console.log(inputArray);
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "z") {
      inputArray[i] = "a";
    } else {
      inputArray[i] = String.fromCharCode(inputArray[i].charCodeAt(0) + 1);
    }
  }
  return inputArray.join("");
}

console.log(alphabeticShift("crazy"));
