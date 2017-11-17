// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import Immutable from 'immutable';
import { emptyBasket } from '../../model/configurationApi';
import type { Basket, People } from '../../model/types/basketPeopleTypes';
import { makePeopleRecord } from '../../model/types/basketPeopleTypes';
import type { VatReport, DutyReport } from '../../model/types/calculationTypes';
import {
  makeDutyReportRecord,
  makeVatReportRecord,
} from '../../model/types/calculationTypes';

type StateObj = {
  people: People,
  basket: Basket,
  vatReport: VatReport,
  dutyReport: DutyReport,
};

export const getInitialState: RecordFactory<StateObj> = Immutable.Record({
  people: makePeopleRecord(),
  basket: emptyBasket,
  vatReport: makeVatReportRecord(),
  dutyReport: makeDutyReportRecord(),
});

export type State = RecordOf<StateObj>;
