function isBishopAndPawnInSameDiagonal(bishop: string, pawn: string): boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  const bishopX = board[bishop[0]];
  console.log(bishopX);
  const bishopY = board[pawn[0]];
  const pawnX = parseInt(bishop[1]);
  const pawnY = parseInt(pawn[1]);

  if (
    bishopX + bishopY ===
    pawnX + pawnY
    // bishopX + bishopY === pawnX + pawnY ||
    // bishopX + pawnY === pawnX + bishopY
    // Math.abs(pawnX - bishopX) === Math.abs(pawnY - bishopY)
  ) {
    return true;
  }

  return false;
}

console.log(isBishopAndPawnInSameDiagonal("a1", "g7"));
