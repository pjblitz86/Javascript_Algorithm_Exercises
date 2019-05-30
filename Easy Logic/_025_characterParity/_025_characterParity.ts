function characterParity(symbol: string): string {
  let parsedSymbol = parseInt(symbol);
  // refactored
  return isNaN(parsedSymbol)
    ? "not a digit"
    : parsedSymbol % 2 === 0
    ? "even"
    : "odd";

  // if (isNaN(parsedSymbol)) {
  //   return "not a digit";
  // }
  // if (typeof parsedSymbol === "number") {
  //   if (parsedSymbol % 2 === 0) {
  //     return "even";
  //   } else {
  //     return "odd";
  //   }
  // }
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
