// @flow

// NOTE: rounding is tested in roudingTest.js

import {
  flatAllAmounts,
  flatLargeAmounts,
  flatNormalAmounts,
  formatDate,
  quantityRounding,
} from '../utils';
import { sampleAmounts1 } from './fullBasketsAndAmounts';

describe('formatDate works as expected', () => {
  test('try some dates', () => {
    expect(formatDate(new Date('2000/01/01'))).toBe('01.01.2000');
    expect(formatDate(new Date('2000/13/01'))).toBe('Invalid Date');
    expect(formatDate(new Date('2000/01/13'))).toBe('13.01.2000');
  });
});

describe('Flat amounts does what it should', () => {
  test('flatAllAmounts', () => {
    const noIds = flatAllAmounts(sampleAmounts1).map(a => {
      a.id = 'x';
      return a;
    });
    expect(noIds).toMatchSnapshot();
  });

  test('flatNormalAmounts', () => {
    const noIds = flatNormalAmounts(sampleAmounts1).map(a => {
      a.id = 'x';
      return a;
    });
    expect(noIds).toMatchSnapshot();
  });

  test('flatLargeAmounts', () => {
    const noIds = flatLargeAmounts(sampleAmounts1).map(a => {
      a.id = 'x';
      return a;
    });
    expect(noIds).toMatchSnapshot();
  });
});

describe('Quantity rounding', () => {
  test('default category', () => {
    expect(quantityRounding(123.321, 'Meds')).toBe(124);
  });
  test('invalid category', () => {
    // $FlowFixMe
    expect(quantityRounding(123.321, 'foo')).toBe(124);
  });
  test('Meat', () => {
    expect(quantityRounding(123.321, 'Meat')).toBe(123.4);
  });
});
