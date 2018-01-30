// @flow
import type { SBState } from '../SnackBarsContainer';

export const setInitStates = (sbState: SBState): SBState => ({
    ...sbState,
    snackBarStates: {
      limitExceeded: 'hidden',
      offline: 'displayed',
    },
  });
