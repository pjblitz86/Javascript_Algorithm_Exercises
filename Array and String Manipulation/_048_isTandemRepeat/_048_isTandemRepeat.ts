function isTandemRepeat(inputString: string): boolean {
  const firstHalfStr = inputString.slice(0, inputString.length / 2);
  return firstHalfStr === inputString.slice(firstHalfStr.length);
}

console.log(isTandemRepeat("tandemtandem"));
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("2w2ww"));
