// @flow

import { calculateDuty } from '../dutyCalculations';
import {
  presentationBasket1,
  presentationBasket2,
  sampleBasket1,
  sampleBasket5,
} from './fullBaskets';
import {
  addMinor,
  initPeople,
  setAdultPeople,
  subtractAdult,
} from '../configurationApi';

describe('Duty Calculations', () => {
  test('it calculates duty under various scenarios - 1 Adult', () => {
    expect(calculateDuty(sampleBasket1, initPeople)).toMatchSnapshot();
  });

  test('it calculates duty under various scenarios - 1 Adult + 1 Minor', () => {
    expect(
      calculateDuty(sampleBasket1, addMinor(initPeople))
    ).toMatchSnapshot();
  });

  test('Cigarettes are for adults only', () => {
    expect(calculateDuty(sampleBasket5, initPeople).get('totalDuty')).toBe(0);
    expect(
      calculateDuty(sampleBasket5, addMinor(subtractAdult(initPeople))).get(
        'totalDuty'
      )
    ).toBe(25);
  });

  test('it calculates duty under various scenarios - 20 Adults', () => {
    expect(
      calculateDuty(sampleBasket1, setAdultPeople(initPeople, 20))
    ).toMatchSnapshot();
  });

  test('calculate duty for presentation baskets', () => {
    expect(calculateDuty(presentationBasket1, initPeople)).toMatchSnapshot();
    expect(
      calculateDuty(presentationBasket2, addMinor(initPeople))
    ).toMatchSnapshot();
  });
});
