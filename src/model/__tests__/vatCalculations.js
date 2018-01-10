// @flow
import {
  ezvAmounts1,
  ezvAmounts10,
  ezvAmounts11,
  ezvAmounts12,
  ezvAmounts13,
  ezvAmounts2,
  ezvAmounts3,
  ezvAmounts4,
  ezvAmounts5,
  ezvAmounts6,
  ezvAmounts7,
  ezvAmounts8,
  ezvAmounts9,
  maerkiExamples1,
  maerkiExamples2,
  maerkiExamples3,
  sampleAmounts1,
  sampleAmounts2,
  sampleAmounts3,
  sampleAmounts4,
} from './fullBasketsAndAmounts';
import { addAdult, addMinor, initPeople } from '../configurationApi';
import { INDIVIDUALALLOWANCE } from '../constants';
import {
  calculateAllowancesExceptLast,
  calculateVat,
} from '../vatCalculations';
import { currencyExample } from '../currencies';

const twoAdults = addAdult(initPeople);
const threeAdults = addAdult(twoAdults);

describe('VAT Calculations', () => {
  test('it sums vat for all vat-categories', () => {});

  test('calculate allowance correctly', () => {
    expect(calculateAllowancesExceptLast(initPeople)).toBe(0);
    expect(calculateAllowancesExceptLast(addAdult(initPeople))).toBe(
      INDIVIDUALALLOWANCE
    );
    expect(calculateAllowancesExceptLast(addMinor(initPeople))).toBe(
      INDIVIDUALALLOWANCE
    );
  });

  test('it creates a correct vat summary', () => {
    expect(
      calculateVat(sampleAmounts1, initPeople, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(sampleAmounts2, initPeople, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(sampleAmounts3, initPeople, currencyExample).get('totalVat')
    ).toBeCloseTo(60.15);
    expect(
      calculateVat(sampleAmounts4, initPeople, currencyExample).get('totalVat')
    ).toBeCloseTo(51.15);
  });

  test('it works with EZV examples', () => {
    expect(
      calculateVat(ezvAmounts1, initPeople, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts2, initPeople, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts3, twoAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts4, twoAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts5, twoAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts6, twoAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts7, twoAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts8, twoAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts9, twoAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts10, threeAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts11, threeAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts12, threeAdults, currencyExample)
    ).toMatchSnapshot();
    expect(
      calculateVat(ezvAmounts13, threeAdults, currencyExample)
    ).toMatchSnapshot();
  });

  test('it works with Maerki examples', () => {
    expect(
      calculateVat(maerkiExamples1, twoAdults, currencyExample).get('totalVat')
    ).toBe(35.35);

    expect(
      calculateVat(maerkiExamples2, twoAdults, currencyExample).get('totalVat')
    ).toBe(273.3);

    expect(
      calculateVat(maerkiExamples3, threeAdults, currencyExample).get(
        'totalVat'
      )
    ).toBe(271.45);
  });
});
