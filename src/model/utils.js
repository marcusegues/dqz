// @flow

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
