// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import { getInitialState } from './appReducer';
import { getInitialConnectivityState } from './connectivityReducer';
import type { State } from './appReducer';
import type { ConnectivityState } from './connectivityReducer';

type AppStateObj = {
  appState: State,
  connectivity: ConnectivityState,
};

export const getInitialAppState: RecordFactory<AppStateObj> = Immutable.Record({
  appState: getInitialState(),
  connectivity: getInitialConnectivityState(),
});

export type AppState = RecordOf<AppStateObj>;
