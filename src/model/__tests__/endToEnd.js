// @flow

import { addAdult, addMinor, initPeople } from '../configurationApi';

const oneAdult = initPeople;
const twoAdults = addAdult(oneAdult);
const oneAdultOneMinor = addMinor(oneAdult);

// Example 1: Presentation "Verzollungs App im RV"

describe('Parametrized End to End test for predefined scenarios', () => {
  test('');
});
