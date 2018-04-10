// @flow
export const parseInputToFloat = (
  input: string,
  decimalLen: number = 6,
  fractionalLen: number = 2
): string => {
  const splitInputs = input.replace(',', '.').split('.');
  if (splitInputs[1] === '' && splitInputs[0] === '') return '0';
  if (splitInputs[1] === undefined || fractionalLen === 0) {
    return `${splitInputs[0].replace(/[^\d]/gi, '').substr(0, decimalLen)}`;
  }
  return `${splitInputs[0]
    .replace(/[^\d]/gi, '')
    .substr(0, decimalLen)}.${splitInputs[1]
    .replace(/[^\d]/gi, '')
    .substr(0, fractionalLen)}`;
};
