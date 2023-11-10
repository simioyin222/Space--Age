import AgeCalculator from "../src/js/yearsPassed.js";

describe("AgeCalculator", () => {
  let calculator

  beforeEach(() => {
    calculator = new AgeCalculator(56)
  });
  test("should correctly calculate years passed since age 43 on all planets", () => {
    const yearsPassed = calculator.yearsSince(43);
    expect(yearsPassed.earth).toEqual(13);
    
  });
});
