// toString and back trick
function reverseInteger(input: number): number {
  return parseInt(
    input
      .toString()
      .split("")
      .reverse()
      .join("")
  );
}

console.log(reverseInteger(23));
