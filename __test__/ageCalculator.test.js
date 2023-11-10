import AgeCalculator from '../src/js/ageCalculator';

describe('AgeCalculator', () => {
  test('should correctly return age in Mercury years', () => {
    const ageCalculator = new AgeCalculator(30);
    expect(ageCalculator.mercuryAge()).toEqual(7.2);
  });
});