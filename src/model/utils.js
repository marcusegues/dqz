// @flow

import type { Amounts } from './types/basketPeopleAmountsTypes';
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

export const formatDate = (d: Date) => {
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  return [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    d.getFullYear(),
  ].join('.');
};

export const flatAmounts = (amounts: Amounts) => {
  const result: Array<{
    currency: Currency,
    amount: number,
    large: boolean,
  }> = [];
  amounts.forEach((v, k) => {
    v.amounts.map(amt =>
      result.push({ currency: k, amount: amt, large: false })
    );
    v.amountsLarge.map(amt =>
      result.push({ currency: k, amount: amt, large: true })
    );
  });
  return result;
};

export const flatNormalAmounts = (amounts: Amounts) =>
  flatAmounts(amounts).filter(a => !a.large);

export const flatLargeAmounts = (amounts: Amounts) =>
  flatAmounts(amounts).filter(a => a.large);
