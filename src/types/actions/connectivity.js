// @flow
import type { ConnectivityType } from '../connectivity';

export type ConnectivityAction = {
  type: 'SET_CONNECTIVITY',
  connectionInfo: ConnectivityType,
};
