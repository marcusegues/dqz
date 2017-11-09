import { vatCalculator } from '../vatCalculator';
import * as data from './__testData__/vatCalculator';
import Immutable from 'immutable';
import { makeVatReportRecord } from '../types/vatCalculator';

// byId
describe('vatCalculator', () => {
  test('should correctly calculate vat on sample basket 1', () => {
    const result = vatCalculator(...data.sampleBasket1);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 465.5535,
        vatByCategory: Immutable.Map({
          OTHER_TOBACCO: 447.92,
          MEAT_AND_MEAT_PRODUCTS: 1.075,
          BUTTER_OR_CREAM: 16.558500000000002,
        }),
      })
    );
  });

  test('should correctly calculate vat on sample basket 2', () => {
    const result = vatCalculator(...data.sampleBasket2);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 487.4285,
        vatByCategory: Immutable.Map({
          OTHER_TOBACCO: 447.92,
          MEAT_AND_MEAT_PRODUCTS: 1.075,
          BUTTER_OR_CREAM: 38.4335,
        }),
      })
    );
  });

  test('should correctly calculate vat on sample basket 3', () => {
    const result = vatCalculator(...data.sampleBasket3);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 487.4285,
        vatByCategory: Immutable.Map({
          OTHER_TOBACCO: 447.92,
          MEAT_AND_MEAT_PRODUCTS: 1.075,
          BUTTER_OR_CREAM: 38.4335,
        }),
      })
    );
  });
});
