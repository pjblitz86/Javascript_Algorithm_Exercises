function lateRide(min: number): number {
  const hours: number = Math.floor(min / 60);
  const minutes: number = min % 60;
  const currentTimeArr: number[] = hours
    .toString()
    .concat(minutes.toString())
    .split("")
    .map(char => parseInt(char));

  return currentTimeArr.reduce((total, currentValue) => total + currentValue);
}

console.log(lateRide(240));
console.log(lateRide(808));
