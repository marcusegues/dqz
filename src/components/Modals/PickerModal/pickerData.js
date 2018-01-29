// @flow

import type { Category } from '../../../model/types/basketPeopleAmountsTypes';

type PickerItem = {
  id: number,
  label: string,
  value: string,
};
export const pickerItemGenerator = (array: Array<string>): Array<PickerItem> =>
  array.map((a, id) => ({
    id,
    label: `${a}`,
    value: `${a}`,
  }));

const liquidsAmountsPicker: Array<PickerItem> = pickerItemGenerator([
  '0.33',
  '0.5',
  '0.75',
  '1',
  '1.5',
  '2',
]);

const cigarettesAmountsPicker: Array<PickerItem> = pickerItemGenerator([
  '1',
  '10',
  '20',
  '200',
]);

const standardAmountsPicker: Array<PickerItem> = pickerItemGenerator([
  '1',
  '2',
  '5',
  '10',
  '50',
  '100',
  '200',
  '1000',
]);

export const amountsPicker = (category: Category): Array<PickerItem> => {
  switch (category) {
    case 'AlcSoft': {
      return liquidsAmountsPicker;
    }
    case 'AlcHard': {
      return liquidsAmountsPicker;
    }
    case 'Cigarettes': {
      return cigarettesAmountsPicker;
    }
    default: {
      return standardAmountsPicker;
    }
  }
};

export const rangeItemsPicker = (low: number, high: number, step: number) =>
  pickerItemGenerator(
    Array.from(
      { length: Math.floor(1 + (high - low) / step) },
      (_, i) => `${low + step * i}`
    )
  );

export const pickerDecimalUnits = pickerItemGenerator([
  '00',
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
]);

export const pickerHours = pickerItemGenerator([
  '00',
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
]);

export const pickerMinutes = pickerItemGenerator([
  '00',
  '05',
  '10',
  '15',
  '20',
  '25',
  '30',
  '35',
  '40',
  '45',
  '50',
  '55',
]);
