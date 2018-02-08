// @flow

export type ConnectionType =
  | 'none'
  | 'wifi'
  | 'celular'
  | 'unknown'
  | 'bluetooth'
  | 'ethernet'
  | 'wimax';
export type EffectiveConnectionType = '2g' | '3g' | '4g' | 'unknown';
export type ConnectivityType = {
  type: ConnectionType,
  effectiveType: EffectiveConnectionType,
};

export const initConnectivity = {
  type: 'none',
  effectiveType: 'unknown',
};
