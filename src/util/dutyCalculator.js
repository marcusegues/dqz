import { dutyFreeAllowances, dutyRates } from '../constants/duty';
import { CATEGORIES } from '../constants/basket';

export const dutyBySubCategory = (
  subCategoryName,
  quantity,
  numberPersonsOver17,
  numberPersonsUnder17
) => {
  const totalPersons = numberPersonsUnder17 + numberPersonsOver17;
  switch (subCategoryName) {
    case CATEGORIES.MEAT_AND_MEAT_PRODUCTS: {
      const dutyFreeAllowance =
        totalPersons * dutyFreeAllowances.MEAT_AND_MEAT_PRODUCTS;
      const threshold =
        totalPersons * dutyRates.MEAT_AND_MEAT_PRODUCTS_FIRST_DUTY_THRESHOLD;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else if (quantity <= threshold) {
        return (
          dutyRates.MEAT_AND_MEAT_PRODUCTS_DUTY_UNDER_THRESHOLD *
          (quantity - dutyFreeAllowance)
        );
      } else {
        return (
          dutyRates.MEAT_AND_MEAT_PRODUCTS_DUTY_UNDER_THRESHOLD *
            (threshold - dutyFreeAllowance) +
          dutyRates.MEAT_AND_MEAT_PRODUCTS_DUTY_OVER_THRESHOLD *
            (quantity - threshold)
        );
      }
    }
    case CATEGORIES.BUTTER_OR_CREAM: {
      const dutyFreeAllowance =
        totalPersons * dutyFreeAllowances.BUTTER_OR_CREAM;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        return dutyRates.BUTTER_OR_CREAM_DUTY * (quantity - dutyFreeAllowance);
      }
    }
    case CATEGORIES.OILS_FATS_MARGARINE: {
      const dutyFreeAllowance =
        totalPersons * dutyFreeAllowances.OILS_FATS_MARGARINE;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        return (
          dutyRates.OILS_FATS_MARGARINE_DUTY * (quantity - dutyFreeAllowance)
        );
      }
    }
    case CATEGORIES.ALCOHOL_BELOW_18: {
      const dutyFreeAllowance =
        totalPersonsUnder17 * dutyFreeAllowances.ALCOHOL_BELOW_18;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        return dutyRates.ALCOHOL_BELOW_18_DUTY * (quantity - dutyFreeAllowance);
      }
    }
    case CATEGORIES.ALCOHOL_ABOVE_18: {
      const dutyFreeAllowance =
        totalPersonsUnder17 * dutyFreeAllowances.ALCOHOL_ABOVE_18;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        return dutyRates.ALCOHOL_ABOVE_18_DUTY * (quantity - dutyFreeAllowance);
      }
    }
    case CATEGORIES.CIGARETTES_AND_CIGARS: {
      const dutyFreeAllowance =
        totalPersons * dutyFreeAllowances.CIGARETTES_AND_CIGARS;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        return (
          dutyRates.CIGARETTES_AND_CIGARS_DUTY * (quantity - dutyFreeAllowance)
        );
      }
    }
    case CATEGORIES.OTHER_TOBACCO: {
      const dutyFreeAllowance = totalPersons * dutyFreeAllowances.OTHER_TOBACCO;
      if (quantity <= dutyFreeAllowance) {
        return 0;
      } else {
        return dutyRates.OTHER_TOBACCO_DUTY * (quantity - dutyFreeAllowance);
      }
    }
    default: {
      return 0;
    }
  }
};

const dutyCalculator = (
  basket,
  numberPersonsOver17,
  numberPersonsUnder17
) => {};
