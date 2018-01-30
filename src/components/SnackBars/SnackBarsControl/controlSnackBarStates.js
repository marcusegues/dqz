// @flow
import type { SBStateEnriched } from '../SnackBarsContainer';
import { totalAllAmounts } from '../../../model/utils';
import { MAX_DECLARED_CHF } from '../../../constants/declaration';

export const updateState = (sbState: SBStateEnriched): SBStateEnriched => ({
  ...sbState,
  snackBarStates: {
    limitExceeded:
      totalAllAmounts(sbState.amounts, sbState.currencies) > MAX_DECLARED_CHF
        ? 'displayed'
        : 'hidden',
  },
});
