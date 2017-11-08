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
        totalVat: 465.55350000000004,
        vatByCategory: Immutable.Map({
          BUTTER_OR_CREAM: 16.558500000000002,
          MEAT_AND_MEAT_PRODUCTS: 1.075,
          OTHER_TOBACCO: 447.92,
        }),
      })
    );
  });
});
