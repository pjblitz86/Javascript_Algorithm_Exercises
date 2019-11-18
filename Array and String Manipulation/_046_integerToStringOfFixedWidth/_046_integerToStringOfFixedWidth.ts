function integerToStringOfFixedWidth(number: number, width: number): string {
  let numberStr = number.toString();
  const numberWidth = numberStr.length;

  if (numberWidth > width) {
    return numberStr.substring(width);
  } else if (numberWidth === width) {
    return numberStr;
  } else if (numberWidth < width) {
    const widthDiff = width - numberWidth;
    let padStart = "";

    for (let i = 0; i < widthDiff; i++) {
      padStart = padStart.concat("0");
    }

    return padStart.concat(numberStr);
  }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
