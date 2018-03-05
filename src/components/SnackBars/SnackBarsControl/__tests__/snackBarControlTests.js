import { currencyExample } from '../../../../model/currencies';
import { addAmount, initAmounts } from '../../../../model/configurationApi';
import { updateSnackBarVisibilities } from '../controlSnackBarStates';
import { MAX_DECLARED_CHF } from '../../../../constants/declaration';
import { initConnectivity } from '../../../../types/connectivity';

const MainMenuNav = {
  index: 0,
  routes: [{ routeName: 'MainMenu' }],
};

const QuestionAnswerNav = {
  index: 1,
  routes: [{ routeName: 'MainMenu' }, { routeName: 'QuestionAnswer' }],
};

const PaymentNav = {
  index: 2,
  routes: [
    { routeName: 'MainMenu' },
    { routeName: 'QuestionAnswer' },
    { routeName: 'Payment' },
  ],
};

const initStateEnrichedMainMenu = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: initConnectivity,
  nav: MainMenuNav,
};

const initStateEnrichedQA = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: initConnectivity,
  nav: QuestionAnswerNav,
};

const initStateEnrichedPayment = {
  snackBarState: {
    limitExceeded: 'hidden',
    offline: 'hidden',
  },
  amounts: initAmounts,
  currencies: currencyExample,
  connectivity: initConnectivity,
  nav: PaymentNav,
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
  test('init state (value of zero) in MainMenu keeps limitExceeded hidden ', () => {
    expect(
      updateSnackBarVisibilities(initStateEnrichedMainMenu).snackBarState
        .limitExceeded
    ).toBe('hidden');
  });

  test('init state (value of zero) in QuestionAnswer keeps limitExceeded hidden ', () => {
    expect(
      updateSnackBarVisibilities(initStateEnrichedQA).snackBarState
        .limitExceeded
    ).toBe('hidden');
  });

  test('init state (value of zero) in Payment keeps limitExceeded hidden ', () => {
    expect(
      updateSnackBarVisibilities(initStateEnrichedPayment).snackBarState
        .limitExceeded
    ).toBe('hidden');
  });

  test('adding value above declaration limit in MainMenu shows limitExceeded', () => {
    const newState = {
      ...initStateEnrichedMainMenu,
      amounts: addAmount(
        initStateEnrichedMainMenu.amounts,
        'CHF',
        MAX_DECLARED_CHF + 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('adding value above declaration limit in QuestionAnswer shows limitExceeded', () => {
    const newState = {
      ...initStateEnrichedQA,
      amounts: addAmount(
        initStateEnrichedQA.amounts,
        'CHF',
        MAX_DECLARED_CHF + 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('visible');
  });

  test('adding value above declaration limit in Payment shows limitExceeded', () => {
    const newState = {
      ...initStateEnrichedPayment,
      amounts: addAmount(
        initStateEnrichedPayment.amounts,
        'CHF',
        MAX_DECLARED_CHF + 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('adding value below declaration limit in MainMenu does not show limitExceeded', () => {
    const newState = {
      ...initStateEnrichedMainMenu,
      amounts: addAmount(
        initStateEnrichedMainMenu.amounts,
        'CHF',
        MAX_DECLARED_CHF - 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('adding value below declaration limit in QuestionAnswer does not show limitExceeded', () => {
    const newState = {
      ...initStateEnrichedQA,
      amounts: addAmount(
        initStateEnrichedQA.amounts,
        'CHF',
        MAX_DECLARED_CHF - 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('adding value below declaration limit in Payment does not show limitExceeded', () => {
    const newState = {
      ...initStateEnrichedPayment,
      amounts: addAmount(
        initStateEnrichedPayment.amounts,
        'CHF',
        MAX_DECLARED_CHF - 1
      ),
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('adding multiple values summing to below declaration limit in MainMenu does not show limitExceeded', () => {
    const amount1 = addAmount(
      initStateEnrichedMainMenu.amounts,
      'CHF',
      MAX_DECLARED_CHF - 10
    );
    const amount2 = addAmount(amount1, 'CHF', 1);
    const amount3 = addAmount(amount2, 'EUR', 1);
    const newState = {
      ...initStateEnrichedMainMenu,
      amounts: amount3,
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('adding multiple values summing to below declaration limit in QuestionAnswer does not show limitExceeded', () => {
    const amount1 = addAmount(
      initStateEnrichedQA.amounts,
      'CHF',
      MAX_DECLARED_CHF - 10
    );
    const amount2 = addAmount(amount1, 'CHF', 1);
    const amount3 = addAmount(amount2, 'EUR', 1);
    const newState = {
      ...initStateEnrichedQA,
      amounts: amount3,
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });
  test('adding multiple values summing to below declaration limit in Payment does not show limitExceeded', () => {
    const amount1 = addAmount(
      initStateEnrichedPayment.amounts,
      'CHF',
      MAX_DECLARED_CHF - 10
    );
    const amount2 = addAmount(amount1, 'CHF', 1);
    const amount3 = addAmount(amount2, 'EUR', 1);
    const newState = {
      ...initStateEnrichedPayment,
      amounts: amount3,
    };

    expect(
      updateSnackBarVisibilities(newState).snackBarVisibilities.limitExceeded
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type none in MainMenu shows offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(initStateEnrichedMainMenu).snackBarVisibilities
        .offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type none in QuestionAnswer shows offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(initStateEnrichedQA).snackBarVisibilities
        .offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type none in Payment shows offline snackbar', () => {
    expect(
      updateSnackBarVisibilities(initStateEnrichedPayment).snackBarVisibilities
        .offline
    ).toBe('visible');
  });

  test('snack bar state with connectivity type wifi in MainMenu does not show offline snackbar', () => {
    const snackBarStateWithWifiConnectivityMainMenu = {
      ...snackBarStateWithWifiConnectivity,
      nav: MainMenuNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithWifiConnectivityMainMenu)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type wifi in QuestionAnswer does not show offline snackbar', () => {
    const snackBarStateWithWifiConnectivityQA = {
      ...snackBarStateWithWifiConnectivity,
      nav: QuestionAnswerNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithWifiConnectivityQA)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type wifi in Payment does not show offline snackbar', () => {
    const snackBarStateWithWifiConnectivityPayment = {
      ...snackBarStateWithWifiConnectivity,
      nav: PaymentNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithWifiConnectivityPayment)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type celular in MainMenu does not show offline snackbar', () => {
    const snackBarStateWithCelularConnectivityMainMenu = {
      ...snackBarStateWithCelularConnectivity,
      nav: MainMenuNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithCelularConnectivityMainMenu)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type celular in QuestionAnswer does not show offline snackbar', () => {
    const snackBarStateWithCelularConnectivityQA = {
      ...snackBarStateWithCelularConnectivity,
      nav: QuestionAnswerNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithCelularConnectivityQA)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type celular in Payment does not show offline snackbar', () => {
    const snackBarStateWithCelularConnectivityPayment = {
      ...snackBarStateWithCelularConnectivity,
      nav: PaymentNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithCelularConnectivityPayment)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type bluetooth in MainMenu does not show offline snackbar', () => {
    const snackBarStateWithBluetoothConnectivityMainMenu = {
      ...snackBarStateWithBluetoothConnectivity,
      nav: MainMenuNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithBluetoothConnectivityMainMenu)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type bluetooth in QuestionAnswer does not show offline snackbar', () => {
    const snackBarStateWithBluetoothConnectivityQA = {
      ...snackBarStateWithBluetoothConnectivity,
      nav: QuestionAnswerNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithBluetoothConnectivityQA)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type bluetooth in Payment does not show offline snackbar', () => {
    const snackBarStateWithBluetoothConnectivityPayment = {
      ...snackBarStateWithBluetoothConnectivity,
      nav: PaymentNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithBluetoothConnectivityPayment)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type ethernet in MainMenu does not show offline snackbar', () => {
    const snackBarStateWithEthernetConnectivityMainMenu = {
      ...snackBarStateWithEthernetConnectivity,
      nav: MainMenuNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithEthernetConnectivityMainMenu)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type ethernet in QuestionAnswer does not show offline snackbar', () => {
    const snackBarStateWithEthernetConnectivityQA = {
      ...snackBarStateWithEthernetConnectivity,
      nav: QuestionAnswerNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithEthernetConnectivityQA)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type ethernet in Payment does not show offline snackbar', () => {
    const snackBarStateWithEthernetConnectivityPayment = {
      ...snackBarStateWithEthernetConnectivity,
      nav: PaymentNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithEthernetConnectivityPayment)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type wimax in MainMenu does not show offline snackbar', () => {
    const snackBarStateWithWimaxConnectivityMainMenu = {
      ...snackBarStateWithWimaxConnectivity,
      nav: MainMenuNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithWimaxConnectivityMainMenu)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type wimax in QuestionAnswer does not show offline snackbar', () => {
    const snackBarStateWithWimaxConnectivityQA = {
      ...snackBarStateWithWimaxConnectivity,
      nav: QuestionAnswerNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithWimaxConnectivityQA)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  test('snack bar state with connectivity type wimax in Payment does not show offline snackbar', () => {
    const snackBarStateWithWimaxConnectivityPayment = {
      ...snackBarStateWithWimaxConnectivity,
      nav: PaymentNav,
    };
    expect(
      updateSnackBarVisibilities(snackBarStateWithWimaxConnectivityPayment)
        .snackBarVisibilities.offline
    ).toBe('hidden');
  });

  // TODO: ADD TEST FOR UNKNOWN CONNECTION TYPE
});
