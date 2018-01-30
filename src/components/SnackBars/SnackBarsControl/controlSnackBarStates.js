// @flow
import type { SnackBarStateEnriched } from '../SnackBarsContainer';
import { totalAllAmounts } from '../../../model/utils';
import { MAX_DECLARED_CHF } from '../../../constants/declaration';

export const updateSnackBarVisibilities = (
  snackBarState: SnackBarStateEnriched
): SnackBarStateEnriched => ({
  ...snackBarState,
  snackBarVisibilities: {
    limitExceeded:
      totalAllAmounts(snackBarState.amounts, snackBarState.currencies) >
      MAX_DECLARED_CHF
        ? 'visible'
        : 'hidden',
  },
});
