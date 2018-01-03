// @flow
/* global describe, expect, test */

// NOTE: rounding is tested in roudingTest.js

import { formatDate } from '../utils';

describe('formatDate works as expected', () => {
  test('try some dates', () => {
    expect(formatDate(new Date('2000/01/01'))).toBe('01.01.2000');
    expect(formatDate(new Date('2000/13/01'))).toBe('Invalid Date');
    expect(formatDate(new Date('2000/01/13'))).toBe('13.01.2000');
  });
});
