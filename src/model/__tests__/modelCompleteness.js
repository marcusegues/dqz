/* global expect, test, describe */
import { CATEGORIES, CategoriesRates, CategoriesInfo } from '../constants';

describe('The model: ', () => {
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

  test('All Categories have at least one duty-category up to infinity', () => {
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

  test('duty brackets are increasing in threshold', () => {
    CATEGORIES.forEach(c => {
      const dutyThresholds = CategoriesRates.getIn([c, 'duty']).map(
        b => b.threshold
      );
      expect(dutyThresholds.toString()).toBe(dutyThresholds.sort().toString());
    });
  });

  test('If a category has a duty dependency, the other duty is higher', () => {
    CATEGORIES.forEach(c => {
      const dAD = CategoriesRates.getIn([c, 'dutyAllowanceDependency']);
      if (dAD) {
        const thisDuty = CategoriesRates.getIn([c, 'duty']);
        const dependencyDuty = CategoriesRates.getIn([dAD, 'duty']);

        // size must be 1 for this test to work. Otherwise, much more complicated model
        expect(thisDuty.size).toBe(1);
        expect(dependencyDuty.size).toBe(1);

        // Actual test
        expect(dependencyDuty.first().get('fee')).toBeGreaterThanOrEqual(
          thisDuty.first().get('fee')
        );
      }
    });
  });
});
