// @flow

import { calculateDuty } from '../dutyCalculations';
import { sampleBasket1 } from './fullBaskets';
import { addMinor, initPeople, setAdultPeople } from '../configurationApi';

describe('Duty Calculations', () => {
  test('it calculates duty under various scenarios - 1 Adult', () => {
    expect(calculateDuty(sampleBasket1, initPeople)).toMatchSnapshot();
  });

  test('it calculates duty under various scenarios - 1 Adult + 1 Minor', () => {
    expect(
      calculateDuty(sampleBasket1, addMinor(initPeople))
    ).toMatchSnapshot();
  });

  test('it calculates duty under various scenarios - 20 Adults', () => {
    expect(
      calculateDuty(sampleBasket1, setAdultPeople(initPeople, 20))
    ).toMatchSnapshot();
  });
});
