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
});
