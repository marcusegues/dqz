import { vatCalculator } from '../vatCalculator';
import { INPUT_1 } from '../data';

// byId
describe('vatCalculator', () => {
  test('should correctly calculate vat on mock basket 1', () => {
    console.log(...INPUT_1);
    const res = vatCalculator(...INPUT_1);
    expect(res).toEqual(5);
  });
});
