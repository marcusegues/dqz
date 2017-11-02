import { CATEGORIES, CategoriesRates, CategoriesInfo } from '../constants';

describe.only('The model: ', () => {
  test('All Categories have rates', () => {
    CATEGORIES.forEach(c => {
      expect(CategoriesRates.has(c)).toBeTruthy();
    });
  });

  test('All Categories have info', () => {
    CATEGORIES.forEach(c => {
      expect(CategoriesInfo.has(c)).toBeTruthy();
    });
  });

  test('All Categories have at least one category up to infinity', () => {
    const hasInfy = c => {
      const rates = CategoriesRates.get(c);
      return (
        rates.dutyAllowance === Infinity ||
        rates.duty.some(r => r.threshold === Infinity)
      );
    };

    CATEGORIES.forEach(c => {
      expect(hasInfy(c)).toBeTruthy();
    });
  });
});
