function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  let fares: number[] = [];

  for (let i = 0; i < cost_per_minute.length; i++) {
    fares.push(
      +(
        cost_per_minute[i] * ride_time +
        cost_per_mile[i] * ride_distance
      ).toFixed(2)
    );
  }

  return fares;
}

const ride_time = 30;
const ride_distance = 7;
const cost_per_minute = [0.2, 0.35, 0.4, 0.45];
const cost_per_mile = [1.1, 1.8, 2.3, 3.5];

console.log(
  fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile)
);
