function chessBoardCellColor(cell1: string, cell2: string): boolean {
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

  const cell1X = board[cell1[0]];
  const cell1Y = parseInt(cell1[1]);
  const cell1Total = cell1X + cell1Y;
  const cell2X = board[cell2[0]];
  const cell2Y = parseInt(cell2[1]);
  const cell2Total = cell2X + cell2Y;

  return cell1Total % 2 === cell2Total % 2;
}

console.log(chessBoardCellColor("a1", "c3"));
console.log(chessBoardCellColor("a1", "h3"));
