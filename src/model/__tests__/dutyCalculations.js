// @flow

import { calculateDuty } from '../dutyCalculations';
import { sampleBasket1 } from './fullBaskets';
import { initPeople } from '../configurationApi';

describe('Duty Calculations', () => {
  test('it calculates duty under various scenarios', () => {
    expect(calculateDuty(sampleBasket1, initPeople)).toMatchSnapshot();
  });
});
