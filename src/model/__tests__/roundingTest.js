/* global expect, test, describe */
import { rounding } from '../utils';

describe('The model rounds correctly', () => {
  test('under various scenarios: ', () => {
    expect(rounding(0.02)).toBe(0);
    expect(rounding(0.0249)).toBe(0);
    expect(rounding(0.025)).toBe(0.05);
    expect(rounding(0.03)).toBe(0.05);

    expect(rounding(0.07)).toBe(0.05);
    expect(rounding(0.0749)).toBe(0.05);
    expect(rounding(0.075)).toBe(0.1);
    expect(rounding(0.08)).toBe(0.1);

    expect(rounding(0.12)).toBe(0.1);
    expect(rounding(0.1249)).toBe(0.1);
    expect(rounding(0.125)).toBe(0.15);
    expect(rounding(0.13)).toBe(0.15);

    expect(rounding(13.3749)).toBe(13.35);
    expect(rounding(13.375)).toBe(13.4);

    expect(rounding(691 * 0.077)).toBe(53.2);
    expect(rounding(301 * 0.025)).toBe(7.55);
  });
});
