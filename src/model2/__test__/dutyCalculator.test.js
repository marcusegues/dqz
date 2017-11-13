import { dutyCalculator } from '../dutyCalculator';
import * as data from './__testData__/dutyCalculator';

// byId
describe('dutyCalculator', () => {
  test('should correctly calculate duty on mock basket 1 (doc example 1)', () => {
    const result = dutyCalculator(...data.INPUT_1);
    expect(result).toEqual({
      ALCOHOL_ABOVE_18: 0,
      ALCOHOL_BELOW_18: 0,
      ANIMAL_FEED: 0,
      BOOKS: 0,
      BUTTER_OR_CREAM: 16,
      CIGARETTES_AND_CIGARS: 0,
      FERTILIZER: 0,
      FLOWERS_AND_PLANTS: 0,
      MAGAZINES: 0,
      MEAT_AND_MEAT_PRODUCTS: 193,
      MEDICINE: 0,
      OILS_FATS_MARGARINE: 0,
      OTHER_FOODS: 0,
      OTHER_GOODS: 0,
      OTHER_TOBACCO: 0,
    });
  });

  test('should correctly calculate duty on mock basket 2 (doc example 2)', () => {
    const result = dutyCalculator(...data.INPUT_2);
    expect(result).toEqual({
      ALCOHOL_ABOVE_18: 15,
      ALCOHOL_BELOW_18: 0,
      ANIMAL_FEED: 0,
      BOOKS: 0,
      BUTTER_OR_CREAM: 0,
      CIGARETTES_AND_CIGARS: 0,
      FERTILIZER: 0,
      FLOWERS_AND_PLANTS: 0,
      MAGAZINES: 0,
      MEAT_AND_MEAT_PRODUCTS: 0,
      MEDICINE: 0,
      OILS_FATS_MARGARINE: 0,
      OTHER_FOODS: 0,
      OTHER_GOODS: 0,
      OTHER_TOBACCO: 0,
    });
  });
});
