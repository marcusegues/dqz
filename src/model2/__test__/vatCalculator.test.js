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
          BUTTER_OR_CREAM: 38.43350000000001,
        }),
      })
    );
  });

  test('should correctly calculate vat on sample basket 3', () => {
    const result = vatCalculator(...data.sampleBasket3);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 53.431000000000004,
        vatByCategory: Immutable.Map({
          ALCOHOL_BELOW_18: 2.856,
          ALCOHOL_ABOVE_18: 42.84,
          MEAT_AND_MEAT_PRODUCTS: 7.14,
          BUTTER_OR_CREAM: 0.595,
        }),
      })
    );
  });

  test('should correctly calculate vat on sample basket 4', () => {
    const result = vatCalculator(...data.sampleBasket4);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 35.9975,
        vatByCategory: Immutable.Map({
          ALCOHOL_ABOVE_18: 4.76,
          OTHER_GOODS: 19.04,
          MEAT_AND_MEAT_PRODUCTS: 1.19,
          BUTTER_OR_CREAM: 0.595,
          OTHER_FOODS: 10.412500000000001,
        }),
      })
    );
  });

  test('should correctly calculate vat on presentation basket 1', () => {
    const result = vatCalculator(...data.presentationBasket1);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 53.431,
        vatByCategory: Immutable.Map({
          ALCOHOL_BELOW_18: 2.856,
          ALCOHOL_ABOVE_18: 4.76,
          OTHER_GOODS: 38.08,
          MEAT_AND_MEAT_PRODUCTS: 7.14,
          BUTTER_OR_CREAM: 0.595,
        }),
      })
    );
  });

  test('should correctly calculate vat on presentationBasket2', () => {
    const result = vatCalculator(...data.presentationBasket2);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 35.9975,
        vatByCategory: Immutable.Map({
          ALCOHOL_ABOVE_18: 4.76,
          OTHER_GOODS: 19.04,
          MEAT_AND_MEAT_PRODUCTS: 1.19,
          BUTTER_OR_CREAM: 0.595,
          OTHER_FOODS: 10.412500000000001,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket1', () => {
    const result = vatCalculator(...data.ezvBasket1);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 0,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 0,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket2', () => {
    const result = vatCalculator(...data.ezvBasket2);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 10,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 10,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket3', () => {
    const result = vatCalculator(...data.ezvBasket3);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 15,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 15,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket4', () => {
    const result = vatCalculator(...data.ezvBasket4);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 22.5,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 22.5,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket5', () => {
    const result = vatCalculator(...data.ezvBasket5);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 10,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 10,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket6', () => {
    const result = vatCalculator(...data.ezvBasket6);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 8,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 8,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket7', () => {
    const result = vatCalculator(...data.ezvBasket7);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 11,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 11,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket8', () => {
    const result = vatCalculator(...data.ezvBasket8);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 16.5,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 16.5,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket9', () => {
    const result = vatCalculator(...data.ezvBasket9);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 25,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 25,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket10', () => {
    const result = vatCalculator(...data.ezvBasket10);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 20,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 20,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket11', () => {
    const result = vatCalculator(...data.ezvBasket11);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 25,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 25,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket12', () => {
    const result = vatCalculator(...data.ezvBasket12);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 22.5,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 22.5,
        }),
      })
    );
  });

  test('should correctly calculate vat on ezvBasket13', () => {
    const result = vatCalculator(...data.ezvBasket13);
    expect(result).toEqual(
      makeVatReportRecord({
        totalVat: 37.5,
        vatByCategory: Immutable.Map({
          MEAT_AND_MEAT_PRODUCTS: 37.5,
        }),
      })
    );
  });
});
