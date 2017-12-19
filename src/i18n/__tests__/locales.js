/* global expect, test, describe */
import { en } from '../locales/en';
import { de } from '../locales/de';
import { fr } from '../locales/fr';
import { it } from '../locales/it';

const objectsHaveSameKeys = (...objects) => {
  const allKeys = objects.reduce(
    (keys, object) => keys.concat(Object.keys(object)),
    []
  );
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
};

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

describe('locales', () => {
  test('all have same keys', () => {
    expect(
      objectsHaveSameKeys(...[en, de, fr, it].map(l => keyify(l.toJS())))
    ).toBe(true);
  });
});