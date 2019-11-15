function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let currentHeight = 0;
  while (currentHeight <= desiredHeight) {
    currentHeight += upSpeed - downSpeed;
    if (currentHeight <= desiredHeight) {
      days++;
    }
  }

  return days;
}

console.log(growingPlant(100, 10, 910));
