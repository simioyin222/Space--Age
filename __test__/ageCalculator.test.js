import AgeCalculator from '../src/js/ageCalculator';

describe('AgeCalculator', () => {
  test('should correctly return age in Mercury years', () => {
    const ageCalculator = new AgeCalculator(30);
    expect(ageCalculator.mercuryAge()).toEqual(7.2);
  });
  test('should correctly return age in Mars years', () => {
    const ageCalculator = new AgeCalculator(30);
    expect(ageCalculator.marsAge()).toEqual(56.4);
  });
  test('should correctly return age in Venus years', () => {
    const ageCalculator = new AgeCalculator(30);
    expect(ageCalculator.venusAge()).toEqual(18.6);
  });
  test('should correctly return age in Jupiter years', () => {
    const ageCalculator = new AgeCalculator(30);
    expect(ageCalculator.jupiterAge()).toEqual(355.8);
  });
});

