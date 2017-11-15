// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import type { People } from '../../model/types/people';
import type { Basket } from '../../model/types/basket';
import { makePeopleRecord } from '../../model/types/people';
import { emptyBasket } from '../../model/configurationApi';

type StateObj = {
  people: People,
  basket: Basket,
};

export const getInitialState: RecordFactory<StateObj> = Immutable.Record({
  people: makePeopleRecord(),
  basket: emptyBasket,
});

export type State = RecordOf<StateObj>;
