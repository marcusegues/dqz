export const pickerItemGenerator = array =>
  array.map((a, id) => ({
    id,
    label: `${a}`,
    value: `${a}`,
  }));

export const liquidsAmountsPicker = pickerItemGenerator([
  '0.33',
  '0.5',
  '0.75',
  '1.0',
  '1.5',
  '2',
]);

export const rangeItemsPicker = (low, high, step) =>
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
