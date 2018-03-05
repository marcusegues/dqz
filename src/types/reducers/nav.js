// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import type { ConnectivityType } from '../connectivity';
import { initConnectivity } from '../connectivity';
import { initialNavState } from '../../reducers/nav';

type NavStateObj = {
  index: number,
  routes: Object,
};

export const getInitialNavState: RecordFactory<NavStateObj> = Immutable.Record({
  ...initialNavState,
});

export type NavState = RecordOf<NavStateObj>;
