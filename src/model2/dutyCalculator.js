// @flow
import { dutyFreeAllowances, dutyRates } from './constants/duty';
import { CATEGORIES, CATEGORIES_LIST } from './constants/categories';
import type { CategoryName } from './types/basket';
import type { DutyCalculatorBasket } from './types/dutyCalculator';

export const dutyForCategory = (
  categoryName: CategoryName,
  quantity: number,
  numberPersonsOver17: number,
  numberPersonsUnder17: number
) => {
  const totalNumberPersons: number = numberPersonsUnder17 + numberPersonsOver17;
  switch (categoryName) {
    case CATEGORIES.MEAT_AND_MEAT_PRODUCTS: {
      const dutyFreeAllowance: number =
        totalNumberPersons * dutyFreeAllowances.MEAT_AND_MEAT_PRODUCTS;
      const threshold: number =
        totalNumberPersons *
        dutyRates.MEAT_AND_MEAT_PRODUCTS_FIRST_DUTY_THRESHOLD;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        const taxableQuantity: number = quantity - dutyFreeAllowance;
        if (taxableQuantity <= threshold) {
          return (
            dutyRates.MEAT_AND_MEAT_PRODUCTS_DUTY_UNDER_THRESHOLD *
            taxableQuantity
          );
        } else {
          return (
            dutyRates.MEAT_AND_MEAT_PRODUCTS_DUTY_UNDER_THRESHOLD * threshold +
            dutyRates.MEAT_AND_MEAT_PRODUCTS_DUTY_OVER_THRESHOLD *
              (taxableQuantity - threshold)
          );
        }
      }
    }
    case CATEGORIES.BUTTER_OR_CREAM:
    case CATEGORIES.OILS_FATS_MARGARINE: {
      const dutyFreeAllowance: number =
        totalNumberPersons * dutyFreeAllowances[categoryName];
      return quantity <= dutyFreeAllowance
        ? 0
        : dutyRates[`${categoryName}_DUTY`] * (quantity - dutyFreeAllowance);
    }
    case CATEGORIES.ALCOHOL_BELOW_18:
    case CATEGORIES.ALCOHOL_ABOVE_18:
    case CATEGORIES.CIGARETTES_AND_CIGARS:
    case CATEGORIES.OTHER_TOBACCO: {
      const dutyFreeAllowance: number =
        numberPersonsOver17 * dutyFreeAllowances[categoryName];
      return quantity <= dutyFreeAllowance
        ? 0
        : dutyRates[`${categoryName}_DUTY`] * (quantity - dutyFreeAllowance);
    }
    default: {
      return 0;
    }
  }
};

export const dutyCalculator = (
  basket: DutyCalculatorBasket,
  numberPersonsOver17: number,
  numberPersonsUnder17: number
) => {
  const dutyByCategory = {};
  CATEGORIES_LIST.forEach(category => {
    const quantity: number = basket[category].quantity;
    dutyByCategory[category] = dutyForCategory(
      (category: CategoryName),
      (quantity: number),
      (numberPersonsOver17: number),
      (numberPersonsUnder17: number)
    );
  });
  return dutyByCategory;
};
