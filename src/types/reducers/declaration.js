// @flow
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
} from 'immutable';
import Immutable from 'immutable';
import type { People, Basket } from '../../model/types/basketPeopleTypes';

export type State = {
  people: People,
  basket: Basket,
};
