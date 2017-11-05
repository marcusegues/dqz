import { vatCalculator } from '../vatCalculator';
import * as data from '../__testData__/vatCalculator';

// byId
describe('vatCalculator', () => {
  test('should correctly calculate vat on mock basket 1 (doc example 1)', () => {
    const result = vatCalculator(...data.INPUT_1);
    expect(result).toEqual({
      ALCOHOL_ABOVE_18: 42.84,
      ALCOHOL_BELOW_18: 2.856,
      ANIMAL_FEED: 0,
      BOOKS: 0,
      BUTTER_OR_CREAM: 0.595,
      CIGARETTES_AND_CIGARS: 0,
      FERTILIZER: 0,
      FLOWERS_AND_PLANTS: 0,
      MAGAZINES: 0,
      MEAT_AND_MEAT_PRODUCTS: 7.14,
      MEDICINE: 0,
      OILS_FATS_MARGARINE: 0,
      OTHER_FOODS: 0,
      OTHER_GOODS: 0,
      OTHER_TOBACCO: 0,
    });
  });

  test('should correctly calculate vat on mock basket 2 (doc example 2)', () => {
    const result = vatCalculator(...data.INPUT_2);
    expect(result).toEqual({
      ALCOHOL_ABOVE_18: 0,
      ALCOHOL_BELOW_18: 0,
      ANIMAL_FEED: 0,
      BOOKS: 0,
      BUTTER_OR_CREAM: 0.595,
      CIGARETTES_AND_CIGARS: 0,
      FERTILIZER: 0,
      FLOWERS_AND_PLANTS: 0,
      MAGAZINES: 0,
      MEAT_AND_MEAT_PRODUCTS: 1.19,
      MEDICINE: 0,
      OILS_FATS_MARGARINE: 0,
      OTHER_FOODS: 10.350000000000001,
      OTHER_GOODS: 0,
      OTHER_TOBACCO: 0,
    });
  });
});
