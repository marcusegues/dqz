// @flow
/* global expect, test, describe */
import { calculateDuty } from '../dutyCalculations';
import {
  presentationBasket1,
  presentationBasket2,
  sampleBasket1,
  sampleBasket5,
  sampleBasket6,
  sampleBasket7,
  sampleBasket8,
  sampleBasket9,
} from './fullBasketsAndAmounts';
import {
  addAdult,
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

  test('Cigarettes and Tobacco are linked for one person', () => {
    expect(calculateDuty(sampleBasket6, initPeople).get('totalDuty')).toBe(5);
    expect(calculateDuty(sampleBasket7, initPeople).get('totalDuty')).toBe(5);
    expect(calculateDuty(sampleBasket8, initPeople).get('totalDuty')).toBe(25);
    expect(calculateDuty(sampleBasket9, initPeople).get('totalDuty')).toBe(
      42.5
    );
  });

  test('Cigarettes and Tobacco are linked for two persons', () => {
    expect(
      calculateDuty(sampleBasket6, addAdult(initPeople)).get('totalDuty')
    ).toBe(0);
    expect(
      calculateDuty(sampleBasket7, addAdult(initPeople)).get('totalDuty')
    ).toBe(0);
    expect(
      calculateDuty(sampleBasket8, addAdult(initPeople)).get('totalDuty')
    ).toBe(0);
    expect(
      calculateDuty(sampleBasket9, addAdult(initPeople)).get('totalDuty')
    ).toBe(10);
  });

  test('it calculates duty under various scenarios - 20 Adults', () => {
    expect(
      calculateDuty(sampleBasket1, setAdultPeople(initPeople, 20))
    ).toMatchSnapshot();
  });
});
