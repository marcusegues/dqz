// @flow

import {
  amountsPicker,
  pickerDates,
  pickerHours,
  pickerItemGenerator,
  pickerMinutes,
  rangeItemsPicker,
} from '../pickerData';

describe('test the data', () => {
  test('picker hours', () => {
    expect(pickerHours.length).toBe(24);
  });

  test('picker minutes', () => {
    expect(pickerMinutes.length).toBe(12);
  });
});

describe('picker generator', () => {
  const expected = JSON.stringify(pickerItemGenerator(['a', 'b', 'c']));
  const returned = JSON.stringify([
    { id: 0, label: 'a', value: 'a' },
    { id: 1, label: 'b', value: 'b' },
    { id: 2, label: 'c', value: 'c' },
  ]);
  expect(expected).toBe(returned);
});

describe('AmountsPicker', () => {
  test('does the right thing', () => {
    expect(amountsPicker('AlcSoft')).toMatchSnapshot();
    expect(amountsPicker('AlcHard')).toMatchSnapshot();
    expect(amountsPicker('Cigarettes')).toMatchSnapshot();
    // $FlowFixMe
    expect(amountsPicker('Foobar')).toMatchSnapshot();
  });
});

describe('rangeItemsPicker', () => {
  test('does the right thing', () => {
    const expected = JSON.stringify(rangeItemsPicker(0, 3, 1));
    const returned = JSON.stringify([
      { id: 0, label: '0', value: '0' },
      { id: 1, label: '1', value: '1' },
      { id: 2, label: '2', value: '2' },
      { id: 3, label: '3', value: '3' },
    ]);
    expect(expected).toBe(returned);
  });
  test('does the right thing with larger steps', () => {
    const expected = JSON.stringify(rangeItemsPicker(0, 3, 2));
    const returned = JSON.stringify([
      { id: 0, label: '0', value: '0' },
      { id: 1, label: '2', value: '2' },
    ]);
    expect(expected).toBe(returned);
  });
});

describe('pickerHours', () => {
  expect(pickerDates.length).toBe(3);
  expect(pickerDates.map(p => p.id).toString()).toBe([0, 1, 2].toString());
});
