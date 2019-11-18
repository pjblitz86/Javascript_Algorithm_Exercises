function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const idsToBeBackedUpArr: number[] = [];

  for (let i = 0; i < changes.length; i++) {
    const fileBackupTime = changes[i][0];
    const fileId = changes[i][1];
    if (fileBackupTime > lastBackupTime) {
      if (!idsToBeBackedUpArr.includes(fileId)) {
        idsToBeBackedUpArr.push(fileId);
      }
    }
  }

  return idsToBeBackedUpArr.sort();
}

const lastBackupTime = 461620205;
const changes = [
  [461620203, 1],
  [461620204, 2],
  [461620205, 6],
  [461620206, 5],
  [461620207, 3],
  [461620207, 5],
  [461620208, 1]
];

console.log(incrementalBackups(lastBackupTime, changes));
