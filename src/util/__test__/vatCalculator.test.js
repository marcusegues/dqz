import { mockActions } from '../__mockActions__';
import vatCalculator from '../vatCalculator';
import { INPUT_1 } from '../__mocks__/vatCalculator';

// byId
describe('vatCalculator', () => {
  test('should correctly calculate vat on mock basket 1', () => {
    expect(vatCalculator(...INPUT_1)).toEqual(5);
  });
});
