import { mockActions } from '../__mockActions__';
import byId from '../users/byId';
import { INPUT_1 } from '../__mocks__/vatCalculator';

import { initialState as byIdInitialState } from '../users/byId';

// byId
describe('vatCalculator', () => {
  test('should correctly calculate vat on mock basket 1', () => {
    expect(vatCalculator(...INPUT_1)).toEqual(5);
  });
});
