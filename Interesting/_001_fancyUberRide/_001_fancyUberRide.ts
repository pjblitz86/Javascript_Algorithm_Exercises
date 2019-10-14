function fancyRide(distance: number, fares: number[]): string {
  const currentMoney = 20;
  const rides: string[] = [
    "UberX",
    "UberXL",
    "UberPlus",
    "UberBlack",
    "UberSUV"
  ];

  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * distance <= currentMoney) {
      return rides[i];
    }
  }
}

const fares = [0.3, 0.5, 0.7, 1, 1.3];
console.log(fancyRide(30, fares));
