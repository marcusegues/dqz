// @flow
import {
  calculateAllowancesExceptLast,
  calculateVat,
  calculateVatLargeItems,
  calculateVatNormalItems,
  applyAllowancesNotLastPerson,
  summarizeByVatBracket,
  vatByCategory,
  totalAmounts,
  applyAllowancesLastPerson,
} from '../vatCalculations';
import {
  ezvBasket1,
  ezvBasket10,
  ezvBasket11,
  ezvBasket12,
  ezvBasket13,
  ezvBasket2,
  ezvBasket3,
  ezvBasket4,
  ezvBasket5,
  ezvBasket6,
  ezvBasket7,
  ezvBasket8,
  ezvBasket9,
  presentationBasket1,
  presentationBasket2,
  sampleBasket1,
  sampleBasket2,
  sampleBasket3,
  sampleBasket4,
} from './fullBaskets';
import { addAdult, addMinor, initPeople } from '../configurationApi';
import { IndividualAllowance } from '../constants';

const b1 = summarizeByVatBracket(sampleBasket1);
const b2 = summarizeByVatBracket(sampleBasket2);
const twoAdults = addAdult(initPeople);
const threeAdults = addAdult(twoAdults);

describe('VAT Calculations', () => {
  test('it sums vat for all vat-categories', () => {});

  test('it sums all the categories as expected', () => {
    expect(b1).toMatchSnapshot();
  });

  test('it calculates vat by category', () => {
    expect(vatByCategory(sampleBasket1)).toMatchSnapshot();
    expect(vatByCategory(sampleBasket2)).toMatchSnapshot();
  });

  test('it calculates the vat of large items (no deduction)', () => {
    expect(calculateVatLargeItems(b1)).toBeCloseTo(457.55);
  });

  test('it calculates the vat of normal items (no deduction)', () => {
    expect(calculateVatNormalItems(b1)).toBe(8);
  });

  test('it sums all the categories and subtracts allowances (pre-last) as expected', () => {
    expect(applyAllowancesNotLastPerson(b1, twoAdults)).toMatchSnapshot();
  });

  test('it sums all the categories and subtracts allowances (pre-last) as expected', () => {
    expect(applyAllowancesNotLastPerson(b2, twoAdults)).toMatchSnapshot();
  });

  test('it sums all the categories and subtracts allowances (last) as expected', () => {
    expect(
      applyAllowancesLastPerson(b1, totalAmounts(sampleBasket1))
    ).toMatchSnapshot();
  });

  test('it sums all the categories and subtracts allowances (last) as expected', () => {
    expect(
      applyAllowancesLastPerson(b2, totalAmounts(sampleBasket2))
    ).toMatchSnapshot();
  });

  test('calculate allowance correctly', () => {
    expect(calculateAllowancesExceptLast(initPeople)).toBe(0);
    expect(calculateAllowancesExceptLast(addAdult(initPeople))).toBe(
      IndividualAllowance
    );
    expect(calculateAllowancesExceptLast(addMinor(initPeople))).toBe(
      IndividualAllowance
    );
  });

  test('it creates a correct vat summary', () => {
    expect(calculateVat(sampleBasket1, initPeople)).toMatchSnapshot();
    expect(calculateVat(sampleBasket2, initPeople)).toMatchSnapshot();
    expect(calculateVat(sampleBasket3, initPeople).get('totalVat')).toBeCloseTo(
      53.45
    );
    expect(calculateVat(sampleBasket4, initPeople).get('totalVat')).toBeCloseTo(
      35.9975
    );
  });

  test('it works with EZV examples', () => {
    expect(calculateVat(ezvBasket1, initPeople)).toMatchSnapshot();
    expect(calculateVat(ezvBasket2, initPeople)).toMatchSnapshot();
    expect(calculateVat(ezvBasket3, twoAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket4, twoAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket5, twoAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket6, twoAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket7, twoAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket8, twoAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket9, twoAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket10, threeAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket11, threeAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket12, threeAdults)).toMatchSnapshot();
    expect(calculateVat(ezvBasket13, threeAdults)).toMatchSnapshot();
    expect(calculateVat(presentationBasket1, initPeople)).toMatchSnapshot();
    expect(
      calculateVat(presentationBasket2, addMinor(initPeople))
    ).toMatchSnapshot();
  });
});
