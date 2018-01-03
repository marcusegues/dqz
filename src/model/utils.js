// @flow

import type { Amounts, AmountWithId } from './types/basketPeopleAmountsTypes';
import type { Currency } from './currencies';

export const rounding = (x: number): number => {
  // this rounding is not perfect, due to floating point
  const rounding1: number = Math.round(x * 100);
  const modulo: number = rounding1 % 5;
  let adjusted = rounding1;
  switch (modulo) {
    case 1:
      adjusted -= 1;
      break;
    case 2:
      adjusted -= 2;
      break;
    case 3:
      adjusted += 2;
      break;
    case 4:
      adjusted += 1;
      break;
    default:
  }

  return adjusted / 100;
};

export const formatDate = (d: Date): string => {
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(mm) || isNaN(dd)) {
    return 'Invalid Date';
  }
  return [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    d.getFullYear(),
  ].join('.');
};

type FlatAmount = {
  currency: Currency,
  amount: number,
  large: boolean,
  id: string,
};

export const flatAmounts = (amounts: Amounts): Array<FlatAmount> => {
  const result: Array<FlatAmount> = [];
  amounts.forEach((v, k) => {
    v.amounts.map(amt =>
      result.push({ currency: k, amount: amt.amount, large: false, id: amt.id })
    );
    v.amountsLarge.map(amt =>
      result.push({ currency: k, amount: amt.amount, large: true, id: amt.id })
    );
  });
  return result;
};

export const flatNormalAmounts = (amounts: Amounts): Array<FlatAmount> =>
  flatAmounts(amounts).filter(a => !a.large);

export const flatLargeAmounts = (amounts: Amounts): Array<FlatAmount> =>
  flatAmounts(amounts).filter(a => a.large);
