import {
  calculateVatLargeItems,
  calculateVatNormalItems,
  summarizeByVatBracket,
} from '../vatCalculations';
import { sampleBasket1 } from './fullBaskets';

const b1 = summarizeByVatBracket(sampleBasket1);

describe('VAT Calculations', () => {
  test('it sums vat for all vat-categories', () => {});

  test('it sums all the categories as expected', () => {
    expect(b1).toMatchSnapshot();
  });

  test('it calculates the vat of large items (no deduction)', () => {
    expect(calculateVatLargeItems(b1)).toBeCloseTo(457.525);
  });

  test('it calculates the vat of normal items (no deduction)', () => {
    expect(calculateVatNormalItems(b1)).toBeCloseTo(8.0285);
  });
});
