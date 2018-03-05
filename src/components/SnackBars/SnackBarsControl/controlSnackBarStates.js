// @flow
import type { SnackBarStateEnriched } from '../SnackBarsContainer';
import { totalAllAmounts } from '../../../model/utils';
import { MAX_DECLARED_CHF } from '../../../constants/declaration';
import type { NavState } from '../../../types/reducers/nav';

type SnackBarType = 'limitExceeded' | 'offline';

const allowedScreensBySnackBar = {
  limitExceeded: ['QuestionAnswer'],
  offline: ['Payment'],
};

export const isRouteAllowedForSnackBar = (
  snackBar: SnackBarType,
  nav: NavState
) => {
  const { routes, index } = nav;
  return (
    allowedScreensBySnackBar[snackBar].indexOf(routes[index].routeName) !== -1
  );
};

export const updateSnackBarVisibilities = (
  snackBarState: SnackBarStateEnriched
): SnackBarStateEnriched => {
  const { nav, currencies, amounts, connectivity } = snackBarState;
  return {
    ...snackBarState,
    snackBarVisibilities: {
      limitExceeded:
        isRouteAllowedForSnackBar('limitExceeded', nav) &&
        totalAllAmounts(amounts, currencies) > MAX_DECLARED_CHF
          ? 'visible'
          : 'hidden',
      offline:
        isRouteAllowedForSnackBar('offline', nav) &&
        (connectivity.type === 'none' || connectivity.type === 'unknown')
          ? 'visible'
          : 'hidden',
    },
  };
};
