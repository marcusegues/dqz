// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import { initialNavState } from '../../reducers/nav';

type NavStateObj = {
  index: number,
  routes: Object,
};

export const getInitialNavState: RecordFactory<NavStateObj> = Immutable.Record({
  ...initialNavState,
});

export type NavState = RecordOf<NavStateObj>;
