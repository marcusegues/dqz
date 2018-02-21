// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import { getInitialDeclarationState } from './declaration';
import { getInitialConnectivityState } from './connectivity';
import type { DeclarationState } from './declaration';
import type { ConnectivityState } from './connectivity';
import type { CurrenciesState } from './currencies';
import type { ReceiptsState } from './receipts';
import { getInitialReceiptsState } from './receipts';
import { getInitialCurrenciesState } from './currencies';

type AppStateObj = {
  declaration: DeclarationState,
  connectivity: ConnectivityState,
  currencies: CurrenciesState,
  receipts: ReceiptsState,
};

export const getInitialAppState: RecordFactory<AppStateObj> = Immutable.Record({
  declaration: getInitialDeclarationState(),
  connectivity: getInitialConnectivityState(),
  currencies: getInitialCurrenciesState(),
  receipts: getInitialReceiptsState(),
});

export type AppState = RecordOf<AppStateObj>;
