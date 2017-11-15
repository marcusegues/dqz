// @flow
import { getInitialState } from '../types/reducers/declaration';
import type { State } from '../types/reducers/declaration';
import type { Basket, Category } from '../model/types/basketPeopleTypes';
import { getQuantity, setQuantity } from '../model/configurationApi';

const declaration = (state: State = getInitialState(), action: any): State => {
  switch (action.type) {
    case 'DECLARED_BASKET_CHANGE_QUANTITY': {
      // NOTE: I only have ONE basket
      const category: Category = action.category;
      const basket: Basket = state.get('basket');

      // NOTE: it would be cool to have a `updateQuantity` function :-)
      return state.setIn(
        ['basket'],
        setQuantity(
          basket,
          category,
          getQuantity(basket, category) + action.quantityChange
        )
      );
      /*
      const category: Category = action.category;
      const quantity = Math.max(
        0,
        state.getIn(['basket', category, 'quantity'], 0) + action.quantityChange
      );
      return state.withMutations(s => {
        s
          .setIn(['basket', category, 'quantity'], quantity)
          .setIn(
            ['basket', category, 'duty'],
            calculateDutyForCategory(category, state.get(category), state.get)
          );
      });
      */
    }
    default: {
      return state;
    }
  }
};

export default declaration;

/* THAT does not work this way, I do NOT have duties in the basket
export const getDutyForCategory = (
  state: State,
  category: Category
): number => {
  return state.getIn(['basket', category, 'duty']);
};
*/

/* dito
export const getTotalDuty = (state: State): number => {
  return state
    .get('basket')
    .valueSeq()
    .reduce((acc, val) => acc + val.get('duty'), 0);
};
*/
