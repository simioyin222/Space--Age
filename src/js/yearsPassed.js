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

  calculateAgeOnPlanet(planet) {
    return this.age / this.planetaryRatios[planet];
  }

  yearsSince(age) {
    const yearsPassedEarth = this.age - age
    return {
      earth: yearsPassedEarth,
      mercury:
        this.calculateAgeOnPlanet("mercury") -
        age / this.planetaryRatios["mercury"],
      venus:
        this.calculateAgeOnPlanet("venus") -
        age / this.planetaryRatios["venus"],
      mars:
        this.calculateAgeOnPlanet("mars") - age / this.planetaryRatios["mars"],
      jupiter:
        this.calculateAgeOnPlanet("jupiter") -
        age / this.planetaryRatios["jupiter"],
    };
  }

  yearsUntil(age) {
    const yearsToEarth = age - this.age
    return {
      earth: yearsToEarth,
      mercury:
        age / this.planetaryRatios["mercury"] -
        this.calculateAgeOnPlanet("mercury"),
      venus:
        age / this.planetaryRatios["venus"] -
        this.calculateAgeOnPlanet("venus"),
      mars:
        age / this.planetaryRatios["mars"] - this.calculateAgeOnPlanet("mars"),
      jupiter:
        age / this.planetaryRatios["jupiter"] -
        this.calculateAgeOnPlanet("jupiter"),
    };
  }
}
