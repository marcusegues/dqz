// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import { emptyBasket } from '../../model/configurationApi';
import type { Basket, People } from '../../model/types/basketPeopleTypes';
import { makePeopleRecord } from '../../model/types/basketPeopleTypes';

type StateObj = {
  people: People,
  basket: Basket,
};

export const getInitialState: RecordFactory<StateObj> = Immutable.Record({
  people: makePeopleRecord(),
  basket: emptyBasket,
});

export type State = RecordOf<StateObj>;
