// @flow

import { addMinor, initPeople } from '../configurationApi';
import { presentationBasket1, presentationBasket2 } from './fullBaskets';
import { calculateDuty } from '../dutyCalculations';
import { calculateVat } from '../vatCalculations';

// parties
const oneAdult = initPeople;
const oneAdultOneMinor = addMinor(oneAdult);

// baskets are in a separate file, see ./fullBaskets.js

/* how it works:
1. define an object like this

const testObject = {
  basket: someBasket,
  party: someParty,
  expectedVat: 123,
  expectedDuty: 321,
};

2. Add the testObject to the objects under test.
*/

// Example 1: Presentation "Verzollungs App im RV"
const exampleInPresentation1 = {
  basket: presentationBasket1,
  party: oneAdult,
  expectedDuty: 209,
  expectedVat: 53.4,
};

const exampleInPresentation2 = {
  basket: presentationBasket2,
  party: oneAdultOneMinor,
  expectedDuty: 15,
  expectedVat: 12.1,
};

const objectsUnderTest = [exampleInPresentation1, exampleInPresentation2];

// and here we do what needs to be done...
describe('Parametrized End to End test for predefined scenarios', () => {
  test('It tests all objects under test', () => {
    objectsUnderTest.forEach(o => {
      const { basket, party, expectedDuty, expectedVat } = o;
      expect(calculateDuty(basket, party).get('totalDuty')).toBeCloseTo(
        expectedDuty
      );
      expect(calculateVat(basket, party).get('totalVat')).toBeCloseTo(
        expectedVat,
        1
      );
    });
  });
});
