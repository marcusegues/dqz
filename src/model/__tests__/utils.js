// @flow

// NOTE: rounding is tested in roudingTest.js

import {
  flatAmounts,
  flatLargeAmounts,
  flatAllAmounts,
  formatDate,
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
  test('flatAmounts', () => {
    const noIds = flatAmounts(sampleAmounts1).map(a => {
      a.id = 'x';
      return a;
    });
    expect(noIds).toMatchSnapshot();
  });

  test('flatAllAmounts', () => {
    const noIds = flatAllAmounts(sampleAmounts1).map(a => {
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
