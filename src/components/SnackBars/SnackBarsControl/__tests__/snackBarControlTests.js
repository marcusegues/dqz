import {currencyExample} from "../../../../model/currencies";
import {addAmount, initAmounts} from "../../../../model/configurationApi";
import {updateState} from "../controlSnackBarStates";
import {MAX_DECLARED_CHF} from "../../../../constants/declaration";

const initStateEnriched = {
    snackBarState: {
        limitExceeded: 'hidden',

    },
    amounts: initAmounts,
    currencies: currencyExample
};

describe('Test snack bar control flow', () => {
    test('init state (value of zero) keeps limitExceeded hidden ', () => {
        expect(updateState(initStateEnriched).snackBarState.limitExceeded).toBe('hidden');
    });
    test('adding value above declaration limit shows limitExceeded', () => {
        const newState = {
            ...initStateEnriched,
            amounts: addAmount(initStateEnriched.amounts, 'CHF', (MAX_DECLARED_CHF + 1))
        }

        expect(updateState(newState).snackBarStates.limitExceeded).toBe('displayed');
    });
});

