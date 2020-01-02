function makeArrayConsecutive2(statues: number[]): number {
  const sortedStatues = statues.sort((a, b) => a - b);
  let neededStatues: number = 0;
  const min = sortedStatues[0];
  const max = sortedStatues[sortedStatues.length - 1];

  for (let i = min; i < max; i++) {
    if (!sortedStatues.includes(i)) {
      neededStatues++;
    }
  }

  return neededStatues;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
