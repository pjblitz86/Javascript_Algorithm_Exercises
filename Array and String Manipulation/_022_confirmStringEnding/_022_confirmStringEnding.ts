function confirmEnding(input: string, target: string): boolean {
  return input.substr(target.length * -1) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
