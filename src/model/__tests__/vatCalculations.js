// @flow
import {
  calculateAllowances,
  calculateVat,
  calculateVatLargeItems,
  calculateVatNormalItems,
  applyAllowances,
  summarizeByVatBracket,
  vatByCategory,
} from '../vatCalculations';
import {
  sampleBasket1,
  sampleBasket2,
  sampleBasket3,
  sampleBasket4,
} from './fullBaskets';
import { addAdult, addMinor, initPeople } from '../configurationApi';
import {
  IndividualAllowanceAdult,
  IndividualAllowanceMinor,
} from '../constants';

const b1 = summarizeByVatBracket(sampleBasket1);
const b2 = summarizeByVatBracket(sampleBasket2);

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
    expect(calculateVatLargeItems(b1)).toBeCloseTo(457.525);
  });

  test('it calculates the vat of normal items (no deduction)', () => {
    expect(calculateVatNormalItems(b1)).toBeCloseTo(8.0285);
  });

  test('it sums all the categories and subtracts allowances as expected', () => {
    expect(applyAllowances(b1, initPeople)).toMatchSnapshot();
  });

  test('it sums all the categories and subtracts allowances as expected', () => {
    expect(applyAllowances(b2, initPeople)).toMatchSnapshot();
  });

  test('calculate allowance correctly', () => {
    expect(calculateAllowances(initPeople)).toBe(IndividualAllowanceAdult);
    expect(calculateAllowances(addAdult(initPeople))).toBe(
      2 * IndividualAllowanceAdult
    );
    expect(calculateAllowances(addMinor(initPeople))).toBe(
      IndividualAllowanceAdult + IndividualAllowanceMinor
    );
  });

  test('it creates a correct vat summary', () => {
    expect(calculateVat(sampleBasket1, initPeople)).toMatchSnapshot();
    expect(calculateVat(sampleBasket2, initPeople)).toMatchSnapshot();
    expect(
      calculateVat(sampleBasket3, initPeople).get('totalVatNormalItems')
    ).toBeCloseTo(29.431);
    expect(
      calculateVat(sampleBasket4, initPeople).get('totalVatNormalItems')
    ).toBeCloseTo(12.135);
  });
});
