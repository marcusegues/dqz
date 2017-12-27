// @flow
import Immutable from 'immutable';
import type { Amounts, People } from './types/basketPeopleAmountsTypes';
import { INDIVIDUALALLOWANCE, OVERALLVATRATE } from './constants';
import { makeVatReportRecord } from './types/calculationTypes';
import type { Currency, CurrencyObject } from './currencies';
import { currenciesArray } from './currencies';
import { makeAmountsOfCurrencyRecord } from './types/basketPeopleAmountsTypes';
import type { VatReport } from './types/calculationTypes';
import { rounding } from './utils';

type totalPerCurrency = {
  amounts: number,
  amountsLarge: number,
};

const getCHFperCurrency = (
  amounts: Amounts,
  currency: Currency,
  currencyObject: CurrencyObject
): totalPerCurrency => {
  const thisCurrency = amounts.get(currency, makeAmountsOfCurrencyRecord());
  const sum = (a: number, v: number): number => a + v;

  const amountsThisCurrency: number = thisCurrency
    .get('amounts', Immutable.List())
    .reduce(sum, 0);
  const amountsLargeThisCurrency: number = thisCurrency
    .get('amountsLarge', Immutable.List())
    .reduce(sum, 0);

  const exchangeRate: number = currencyObject[currency] || 1;

  return {
    amounts: Math.floor(exchangeRate * amountsThisCurrency),
    amountsLarge: Math.floor(exchangeRate * amountsLargeThisCurrency),
  };
};

export const calculateAllowancesExceptLast = (people: People): number =>
  (people.get('minors') + people.get('adults') - 1) * INDIVIDUALALLOWANCE;

export const calculateVat = (
  amounts: Amounts,
  people: People,
  currencyObject: CurrencyObject
): VatReport => {
  const sumsPerCurrency: Array<totalPerCurrency> = currenciesArray.map(c =>
    getCHFperCurrency(amounts, c, currencyObject)
  );

  const grandTotals: totalPerCurrency = sumsPerCurrency.reduce(
    (a, v) => {
      a.amounts += v.amounts;
      a.amountsLarge += v.amountsLarge;
      return a;
    },
    { amounts: 0, amountsLarge: 0 }
  );

  grandTotals.amounts = Math.max(
    0,
    calculateAllowancesExceptLast(people) - grandTotals.amounts
  );

  const sumLastPerson = grandTotals.amounts + grandTotals.largeAmounts;

  if (sumLastPerson <= INDIVIDUALALLOWANCE) {
    return makeVatReportRecord({
      totalVat: 0,
    });
  }

  const lastStep: number =
    rounding(OVERALLVATRATE * grandTotals.amounts) +
    rounding(OVERALLVATRATE * grandTotals.amountsLarge);

  return makeVatReportRecord({
    totalVat: lastStep,
  });
};
