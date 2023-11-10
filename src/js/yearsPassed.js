export default class AgeCalculator {
  constructor(age) {
    this.age = age
    this.planetaryRatios = {
      mercury: 0.24,
      venus: 0.62,
      mars: 1.88,
      jupiter: 11.86,
    };
  }
}
