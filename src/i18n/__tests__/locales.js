/* global expect, test, describe */
import { en1, en2, de1, fr1, it1 } from './exampleLocales';

const objectsHaveSameKeys = (...objects) => {
  const allKeys = objects.reduce(
    (keys, object) => keys.concat(Object.keys(object)),
    []
  );
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
};

function arrayifyKeys(object) {
  const array = [];
  if (typeof object === 'object' && !Array.isArray(object)) {
    Object.keys(object).forEach(key => {
      array.push(key);
      if (typeof object[key] !== 'string') {
        array.push(arrayifyKeys(object[key]));
      }
    });
  }
  return array;
}

function keyify(obj, prefix = '') {
  return Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res;
    } else if (obj[el] !== null && typeof obj[el] === 'object') {
      return [...res, ...keyify(obj[el], `${prefix}${el}.`)];
    }
    return [...res, prefix + el];
  }, []);
}

describe('locales examples', () => {
  test('1 through arrayifyKeys function generate same output', () => {
    expect(arrayifyKeys(en1.toJS())).toEqual([
      'onBoarding',
      ['onBoardingMessage', 'selectLanguage'],
      'general',
      ['declareGoods', 'pleaseSelect'],
      'largeAmountInput',
      ['pleaseInput', 'totalLargeAmount'],
    ]);
  });

  test('1 through keyify function generate same output', () => {
    const enKeyified = keyify(en1.toJS());
    expect(enKeyified).toEqual([
      'onBoarding.onBoardingMessage',
      'onBoarding.selectLanguage',
      'general.declareGoods',
      'general.pleaseSelect',
      'largeAmountInput.pleaseInput',
      'largeAmountInput.totalLargeAmount',
    ]);
  });

  test('1 all have same keys', () => {
    const enKeyified = keyify(en1.toJS());
    const deKeyified = keyify(de1.toJS());
    const frKeyified = keyify(fr1.toJS());
    const itKeyified = keyify(it1.toJS());
    expect(
      objectsHaveSameKeys(enKeyified, deKeyified, frKeyified, itKeyified)
    ).toBe(true);
  });

  test('have the untyped extra keys ignored', () => {
    const enKeyified = keyify(en2.toJS());
    const deKeyified = keyify(de1.toJS());
    const frKeyified = keyify(fr1.toJS());
    const itKeyified = keyify(it1.toJS());
    expect(
      objectsHaveSameKeys(enKeyified, deKeyified, frKeyified, itKeyified)
    ).toBe(true);
  });
});
