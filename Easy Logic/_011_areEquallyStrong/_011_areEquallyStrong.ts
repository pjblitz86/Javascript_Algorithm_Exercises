function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendLeft: number,
  friendRight: number
): boolean {
  return (
    (yourLeft === friendLeft && yourRight === friendRight) ||
    (yourLeft === friendRight && yourRight === friendLeft)
  );
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
