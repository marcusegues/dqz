// @flow
import {
  calculateDuty,
  getAdultsOnly,
  getAllowance,
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
  addQuantity,
  emptyBasket,
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

  test('getAllowanceRaw obtains correct dutyAllowance property for each category - 3 adults', () => {
    const threeAdults = setPeople(initPeople, 3, 0);
    expect(getAllowanceRaw('Meat', threeAdults)).toBe(3);
    expect(getAllowanceRaw('Butter', threeAdults)).toBe(3);
    expect(getAllowanceRaw('Oils', threeAdults)).toBe(15);
    expect(getAllowanceRaw('OtherFood', threeAdults)).toBe(Infinity);
    expect(getAllowanceRaw('AlcSoft', threeAdults)).toBe(15);
    expect(getAllowanceRaw('AlcHard', threeAdults)).toBe(3);
    expect(getAllowanceRaw('Cigarettes', threeAdults)).toBe(750);
    expect(getAllowanceRaw('Tobacco', threeAdults)).toBe(750);
    expect(getAllowanceRaw('Books', threeAdults)).toBe(Infinity);
    expect(getAllowanceRaw('Magazines', threeAdults)).toBe(Infinity);
    expect(getAllowanceRaw('Flowers', threeAdults)).toBe(Infinity);
    expect(getAllowanceRaw('AnimalFeed', threeAdults)).toBe(Infinity);
    expect(getAllowanceRaw('Fertilizer', threeAdults)).toBe(Infinity);
    expect(getAllowanceRaw('Other', threeAdults)).toBe(Infinity);
  });

  test('getAllowanceRaw obtains correct dutyAllowance property for each category - 1 adult, 1 minors', () => {
    const oneAdultOneMinor = setPeople(initPeople, 1, 1);
    expect(getAllowanceRaw('Meat', oneAdultOneMinor)).toBe(2);
    expect(getAllowanceRaw('Butter', oneAdultOneMinor)).toBe(2);
    expect(getAllowanceRaw('Oils', oneAdultOneMinor)).toBe(10);
    expect(getAllowanceRaw('OtherFood', oneAdultOneMinor)).toBe(Infinity);
    expect(getAllowanceRaw('AlcSoft', oneAdultOneMinor)).toBe(5);
    expect(getAllowanceRaw('AlcHard', oneAdultOneMinor)).toBe(1);
    expect(getAllowanceRaw('Cigarettes', oneAdultOneMinor)).toBe(250);
    expect(getAllowanceRaw('Tobacco', oneAdultOneMinor)).toBe(250);
    expect(getAllowanceRaw('Books', oneAdultOneMinor)).toBe(Infinity);
    expect(getAllowanceRaw('Magazines', oneAdultOneMinor)).toBe(Infinity);
    expect(getAllowanceRaw('Flowers', oneAdultOneMinor)).toBe(Infinity);
    expect(getAllowanceRaw('AnimalFeed', oneAdultOneMinor)).toBe(Infinity);
    expect(getAllowanceRaw('Fertilizer', oneAdultOneMinor)).toBe(Infinity);
    expect(getAllowanceRaw('Other', oneAdultOneMinor)).toBe(Infinity);
  });

  test('getAllowance (using dependencies) - tobacco depends on cigarettes', () => {
    expect(getAllowance(emptyBasket, 'Meat', initPeople)).toBe(1);
    expect(getAllowance(emptyBasket, 'Cigarettes', initPeople)).toBe(250);
    expect(getAllowance(emptyBasket, 'Tobacco', initPeople)).toBe(250);

    const basketWithTobacco = addQuantity(emptyBasket, 'Tobacco', 100);
    expect(getAllowance(basketWithTobacco, 'Meat', initPeople)).toBe(1);
    expect(getAllowance(basketWithTobacco, 'Cigarettes', initPeople)).toBe(250);
    expect(getAllowance(basketWithTobacco, 'Tobacco', initPeople)).toBe(250);

    const basketWithCigs = addQuantity(emptyBasket, 'Cigarettes', 100);
    expect(getAllowance(basketWithCigs, 'Meat', initPeople)).toBe(1);
    expect(getAllowance(basketWithCigs, 'Cigarettes', initPeople)).toBe(250);
    // and here's the key:
    expect(getAllowance(basketWithCigs, 'Tobacco', initPeople)).toBe(150);
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
