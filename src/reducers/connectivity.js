// @flow
import { getInitialConnectivityState } from '../types/reducers/connectivity';
import type { ConnectivityState } from '../types/reducers/connectivity';
import type { ConnectivityAction } from '../types/actions/connectivity';

export const connectivity = (
  state: ConnectivityState = getInitialConnectivityState(),
  action: ConnectivityAction
): ConnectivityState => {
  switch (action.type) {
    case 'SET_CONNECTIVITY': {
      return state.set('connectivity', action.connectionInfo);
    }
    default: {
      return state;
    }
  }
};

export const getConnectivity = (state: ConnectivityState) => state.connectivity;
