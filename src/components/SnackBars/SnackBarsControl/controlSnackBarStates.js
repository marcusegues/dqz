// @flow
import type { SnackBarStateEnriched } from '../SnackBarsContainer';
import { totalAllAmounts } from '../../../model/utils';
import { MAX_DECLARED_CHF } from '../../../constants/declaration';
import type { NavState } from '../../../types/reducers/nav';

export type SnackBarType =
  | 'limitExceeded'
  | 'offline'
  | 'paymentAborted'
  | 'paymentFailed';

const allowedScreensBySnackBar = {
  limitExceeded: ['QuestionAnswer', 'Payment'],
  offline: ['Payment'],
  paymentAborted: ['Payment'],
  paymentFailed: ['Payment'],
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
  const {
    nav,
    currencies,
    amounts,
    connectivity,
    paymentStatus,
  } = snackBarState;
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
      paymentAborted:
        isRouteAllowedForSnackBar('paymentAborted', nav) &&
        paymentStatus === 'aborted'
          ? 'visible'
          : 'hidden',
      paymentFailed:
        isRouteAllowedForSnackBar('paymentFailed', nav) &&
        paymentStatus === 'failed'
          ? 'visible'
          : 'hidden',
    },
  };
};
