// @flow
import type {
  Map as ImmutableMapType,
  RecordOf,
  RecordFactory,
  List as ImmutableListType,
} from 'immutable';
import Immutable from 'immutable';
import type { Category } from './category';
import type { Rates } from './rates';

/**
 * todo, jsdoc
 */
export type RatesType = ImmutableMapType<Category, Rates>;

// PEOPLE
type PeopleContent = {
  adults: number,
  minors: number,
};
export const makePeopleRecord: RecordFactory<PeopleContent> = Immutable.Record({
  adults: 1,
  minors: 0,
});
export type People = RecordOf<PeopleContent>;
