import {
  anyQuantitiesInBasket,
  setQuestionStatus,
} from '../controlQuestionStatus';
import { emptyBasket } from '../../../../model/configurationApi';
import { addQuantity } from '../../../../model/configurationApi';

describe('Any quantities in basket', () => {
  test('returns false if empty basket', () => {
    const result = anyQuantitiesInBasket(emptyBasket);
    expect(result).toBe(false);
  });

  test('returns true when we add a positive quantity to an empty basket', () => {
    const b = addQuantity(emptyBasket, 'Meat', 1);
    const result = anyQuantitiesInBasket(b);
    expect(result).toBe(true);
  });
});
