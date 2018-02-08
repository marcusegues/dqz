import { currencyExample } from '../../../../model/currencies';
import { addAmount, initAmounts } from '../../../../model/configurationApi';
import { updateSnackBarVisibilities } from '../controlSnackBarStates';
import { MAX_DECLARED_CHF } from '../../../../constants/declaration';
import { initConnectivity } from '../../../../types/connectivity';

const initStateEnriched = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: initConnectivity,
};

const snackBarStateWithWifiConnectivity = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: {
    type: 'wifi',
    effectiveType: 'unknown',
  },
};

const snackBarStateWithCelularConnectivity = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: {
    type: 'celular',
    effectiveType: 'unknown',
  },
};

const snackBarStateWithBluetoothConnectivity = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: {
    type: 'bluetooth',
    effectiveType: 'unknown',
  },
};

const snackBarStateWithEthernetConnectivity = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: {
    type: 'ethernet',
    effectiveType: 'unknown',
  },
};

const snackBarStateWithWimaxConnectivity = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: {
    type: 'wimax',
    effectiveType: 'unknown',
  },
};

describe('Test snack bar control flow', () => {
  test('init state (value of zero) keeps limitExceeded hidden ', () => {
    expect(
      updateSnackBarVisibilities(initStateEnriched).snackBarState.limitExceeded
    ).toBe('hidden');
  });
  test('adding value above declaration limit shows limitExceeded', () => {
    const newState = {
      ...initStateEnriched,
      amounts: addAmount(
        initStateEnriched.amounts,
        'CHF',
        MAX_DECLARED_CHF + 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('visible');
  });
  test('adding value below declaration limit does not show limitExceeded', () => {
    const newState = {
      ...initStateEnriched,
      amounts: addAmount(
        initStateEnriched.amounts,
        'CHF',
        MAX_DECLARED_CHF - 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });
  test('adding multiple values summing to below declaration limit does not show limitExceeded', () => {
    const amount1 = addAmount(
      initStateEnriched.amounts,
      'CHF',
      MAX_DECLARED_CHF - 10
    );
    const amount2 = addAmount(amount1, 'CHF', 1);
    const amount3 = addAmount(amount2, 'EUR', 1);
    const newState = {
      ...initStateEnriched,
      amounts: amount3,
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type none shows offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(initStateEnriched).snackBarVisibilities.offline
    ).toBe('visible');
  });

  test('snack bar state with connectivity type wifi does not show offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(snackBarStateWithWifiConnectivity)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type celular does not show offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(snackBarStateWithCelularConnectivity)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type bluetooth does not show offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(snackBarStateWithBluetoothConnectivity)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type ethernet does not show offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(snackBarStateWithEthernetConnectivity)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type wimax does not show offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(snackBarStateWithWimaxConnectivity)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  // TODO: ADD TEST FOR UNKNOWN CONNECTION TYPE
});
