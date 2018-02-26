// @flow
import { DateTime } from 'luxon';
import type { Amounts } from './types/basketPeopleAmountsTypes';
import type { Currency, CurrencyObject } from './currencies';
import { INDIVIDUALALLOWANCE } from './constants';

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

// Convert localTime to Swiss returns DateTime object.
// Used for receipt datePicker.
export const getConvertedLocalTimeToSwiss = (): Date =>
  DateTime.local().setZone('Europe/Zurich', {
    keepLocalTime: true,
  });

export const roundMinutes = (minutes: number): string =>
  `${5 * Math.floor(minutes / 5)}`;

export const formatFullDate = (d: string, hours: string, minutes: string) =>
  `${d}/${hours}:${minutes}`;

export type FlatAmount = {
  currency: Currency,
  amount: number,
  large: boolean,
  id: string,
};

export const flatAllAmounts = (amounts: Amounts): Array<FlatAmount> => {
  const result: Array<FlatAmount> = [];
  amounts.forEach((v, k) => {
    v.amounts.map(amt =>
      result.push({ currency: k, amount: amt.amount, large: false, id: amt.id })
    );
    v.largeAmounts.map(amt =>
      result.push({ currency: k, amount: amt.amount, large: true, id: amt.id })
    );
  });
  return result;
};

export const flatNormalAmounts = (amounts: Amounts): Array<FlatAmount> =>
  flatAllAmounts(amounts).filter(a => !a.large);

export const flatLargeAmounts = (amounts: Amounts): Array<FlatAmount> =>
  flatAllAmounts(amounts).filter(a => a.large);

export const hasLargeAmount = (
  amounts: Amounts,
  currencyObject: CurrencyObject
): boolean =>
  flatNormalAmounts(amounts).reduce(
    (a, v) => Math.max(a, v.amount * currencyObject[v.currency]),
    0
  ) > INDIVIDUALALLOWANCE;

export const hasOffsettingAmount = (
  amounts: Amounts,
  amount: number,
  currency: Currency
): boolean => {
  const totalsOfCurrency = flatNormalAmounts(amounts)
    .filter(a => a.currency === currency)
    .reduce((a, v) => v.amount + a, 0);
  const largePerCurrency = flatLargeAmounts(amounts)
    .filter(a => a.currency === currency)
    .reduce((a, v) => v.amount + a, 0);
  return totalsOfCurrency - largePerCurrency > amount;
};

export const totalAllAmounts = (
  amounts: Amounts,
  currencyObject: CurrencyObject
): number => {
  const flat = flatAllAmounts(amounts);
  return flat.reduce((a, v) => a + v.amount * currencyObject[v.currency], 0);
};

export const totalNormalAmounts = (
  amounts: Amounts,
  currencyObject: CurrencyObject
): number => {
  const flat = flatNormalAmounts(amounts);
  return flat.reduce((a, v) => a + v.amount * currencyObject[v.currency], 0);
};

export const totalLargeAmounts = (
  amounts: Amounts,
  currencyObject: CurrencyObject
): number => {
  const flat = flatLargeAmounts(amounts);
  return flat.reduce((a, v) => a + v.amount * currencyObject[v.currency], 0);
};
