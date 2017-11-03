import type { BasketType } from '../types/types';
import { emptyBasket, setQuantities, setQuantity } from '../helpers';

const basket1: BasketType = emptyBasket;
const b1: BasketType = setQuantity(basket1, 'Butter', 555555555555);
const b2: BasketType = setQuantities(basket1, [
  { category: 'Meat', quantity: 123 },
  { category: 'Butter', quantity: 321 },
]);

console.log(b2);
