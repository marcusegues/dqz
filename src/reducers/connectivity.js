import type { State } from '../types/reducers/appReducer';
import { getInitialState } from '../types/reducers/connectivityReducer';
import type { ConnectivityState } from '../types/reducers/connectivityReducer';
import type { ConnectivityAction } from '../types/actions/connectivity';

export const connectivity = (
  state: ConnectivityState = getInitialState(),
  action: ConnectivityAction
): State => {
  switch (action.type) {
    case 'SET_CONNECTIVITY': {
      return action.connectionInfo;
    }
    default: {
      return state;
    }
  }
};
