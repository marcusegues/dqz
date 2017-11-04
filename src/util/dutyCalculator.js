import { dutyFreeAllowances, dutyRates } from '../constants/duty';
import { CATEGORIES } from '../constants/categories';

export const dutyForCategory = (
  categoryName,
  quantity,
  numberPersonsOver17,
  numberPersonsUnder17
) => {
  const totalNumberPersons = numberPersonsUnder17 + numberPersonsOver17;
  switch (categoryName) {
    case CATEGORIES.MEAT_AND_MEAT_PRODUCTS: {
      const dutyFreeAllowance =
        totalNumberPersons * dutyFreeAllowances.MEAT_AND_MEAT_PRODUCTS;
      const threshold =
        totalNumberPersons *
        dutyRates.MEAT_AND_MEAT_PRODUCTS_FIRST_DUTY_THRESHOLD;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        const taxableQuantity = quantity - dutyFreeAllowance;
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
      const dutyFreeAllowance =
        totalNumberPersons * dutyFreeAllowances[categoryName];
      return quantity <= dutyFreeAllowance
        ? 0
        : dutyRates[`${categoryName}_DUTY`] * (quantity - dutyFreeAllowance);
    }
    case CATEGORIES.ALCOHOL_BELOW_18:
    case CATEGORIES.ALCOHOL_ABOVE_18:
    case CATEGORIES.CIGARETTES_AND_CIGARS:
    case CATEGORIES.OTHER_TOBACCO: {
      const dutyFreeAllowance =
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
  basket,
  numberPersonsOver17,
  numberPersonsUnder17
) => {
  const dutyByCategory = {};
  Object.keys(basket).forEach(category => {
    const { quantity } = basket[category];
    dutyByCategory[category] = dutyForCategory(
      category,
      quantity,
      numberPersonsOver17,
      numberPersonsUnder17
    );
  });
  return dutyByCategory;
};
