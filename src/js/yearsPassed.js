export default class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetaryRatios = {
      mercury: 0.24,
      venus: 0.62,
      mars: 1.88,
      jupiter: 11.86
    };
  }

  calculateAgeOnPlanet(planet) {
    return this.age / this.planetaryRatios[planet];
  }

  yearsSince(age) {
    const yearsPassedEarth = this.age - age;
    return {
      earth: yearsPassedEarth,
      mercury: this.calculateAgeOnPlanet('mercury') - (age / this.planetaryRatios['mercury']),
    }
  }
}