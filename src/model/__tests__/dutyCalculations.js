// @flow
import {
  calculateDuty,
  getAdultsOnly,
  getAllowanceRaw,
  getPeopleCount,
} from '../dutyCalculations';
import {
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
  setPeople,
  subtractAdult,
} from '../configurationApi';

describe('Duty calculation helpers', () => {
  test('getAdultsOnly obtains correct adultsOnly property for each category', () => {
    expect(getAdultsOnly('Meat')).toBe(false);
    expect(getAdultsOnly('Butter')).toBe(false);
    expect(getAdultsOnly('Oils')).toBe(false);
    expect(getAdultsOnly('OtherFood')).toBe(false);
    expect(getAdultsOnly('AlcSoft')).toBe(true);
    expect(getAdultsOnly('AlcHard')).toBe(true);
    expect(getAdultsOnly('Cigarettes')).toBe(true);
    expect(getAdultsOnly('Tobacco')).toBe(true);
    expect(getAdultsOnly('Books')).toBe(false);
    expect(getAdultsOnly('Magazines')).toBe(false);
    expect(getAdultsOnly('Flowers')).toBe(false);
    expect(getAdultsOnly('AnimalFeed')).toBe(false);
    expect(getAdultsOnly('Fertilizer')).toBe(false);
    expect(getAdultsOnly('Other')).toBe(false);
  });

  test('getPeopleCount returns correct results when adultsOnly is true', () => {
    expect(getPeopleCount(setPeople(initPeople, 5, 4), true)).toBe(5);
  });

  test('getAllowanceRaw obtains correct dutyAllowance property for each category - 1 adult', () => {
    expect(getAllowanceRaw('Meat', initPeople)).toBe(1);
    expect(getAllowanceRaw('Butter', initPeople)).toBe(1);
    expect(getAllowanceRaw('Oils', initPeople)).toBe(5);
    expect(getAllowanceRaw('OtherFood', initPeople)).toBe(Infinity);
    expect(getAllowanceRaw('AlcSoft', initPeople)).toBe(5);
    expect(getAllowanceRaw('AlcHard', initPeople)).toBe(1);
    expect(getAllowanceRaw('Cigarettes', initPeople)).toBe(250);
    expect(getAllowanceRaw('Tobacco', initPeople)).toBe(250);
    expect(getAllowanceRaw('Books', initPeople)).toBe(Infinity);
    expect(getAllowanceRaw('Magazines', initPeople)).toBe(Infinity);
    expect(getAllowanceRaw('Flowers', initPeople)).toBe(Infinity);
    expect(getAllowanceRaw('AnimalFeed', initPeople)).toBe(Infinity);
    expect(getAllowanceRaw('Fertilizer', initPeople)).toBe(Infinity);
    expect(getAllowanceRaw('Other', initPeople)).toBe(Infinity);
  });
});

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
