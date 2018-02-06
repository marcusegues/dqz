// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import type { ConnectivityType } from '../connectivity';
import { initConnectivity } from '../connectivity';

type ConnectivityStateObj = {
  connectivity: ConnectivityType,
};

export const getInitialState: RecordFactory<
  ConnectivityStateObj
> = Immutable.Record({
  connectivity: initConnectivity,
});

export type ConnectivityState = RecordOf<ConnectivityStateObj>;
