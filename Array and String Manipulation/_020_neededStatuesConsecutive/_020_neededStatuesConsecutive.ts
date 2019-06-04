function makeArrayConsecutive2(statues: number[]): number {
  // important! in built sort converts to strings, so number arrays are not sorted correctly!
  let sortedStatues = statues.sort(sortNumber);
  console.log(sortedStatues);
  let count = 0;

  for (let i = 1; i < sortedStatues.length; i++) {
    let previous = sortedStatues[i - 1];
    let current = sortedStatues[i];

    while (previous + 1 < current) {
      previous++;
      count++;
    }
  }
  return count;
}

function sortNumber(a, b) {
  return a - b;
}

const arr = [4, 2, 7, 18];
console.log(makeArrayConsecutive2(arr));
