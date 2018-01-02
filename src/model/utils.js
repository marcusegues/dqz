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

export const formatDate = (d: Date) => {
  const mm = d.getMonth() + 1;
  const dd = d.getDate();
  return [
    (dd > 9 ? '' : '0') + dd,
    (mm > 9 ? '' : '0') + mm,
    d.getFullYear(),
  ].join('.');
};
