import AgeCalculator from "../src/js/yearsPassed.js"

describe("AgeCalculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new AgeCalculator(56);
  });

  test("should correctly calculate years passed since age 43 on all planets", () => {
    const yearsPassed = calculator.yearsSince(43);
    expect(yearsPassed.earth).toEqual(13);
    expect(yearsPassed.mercury).toEqual(54.16666666666666);
    expect(yearsPassed.venus).toEqual(20.967741935483872);
    expect(yearsPassed.mars).toEqual(6.914893617021278);
    expect(yearsPassed.jupiter).toEqual(1.0961214165261386);
  });

  test("should correctly calculate years until age 61 on all planets", () => {
    const yearsUntil = calculator.yearsUntil(61);
    expect(yearsUntil.earth).toEqual(5);
    expect(yearsUntil.mercury).toEqual(20.833333333333343);
    expect(yearsUntil.venus).toEqual(8.064516129032256);
    expect(yearsUntil.mars).toEqual(2.65);
    expect(yearsUntil.jupiter).toEqual(0.42);
  });
});
