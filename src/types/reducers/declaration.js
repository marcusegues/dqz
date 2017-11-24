// @flow
import type { RecordOf, RecordFactory } from 'immutable';
import type { Set as ImmutableSetType } from 'immutable';
import type { Basket, People } from '../../model/types/basketPeopleTypes';
import type { VatReport, DutyReport } from '../../model/types/calculationTypes';
import Immutable from 'immutable';
import { emptyBasket } from '../../model/configurationApi';
import { makePeopleRecord } from '../../model/types/basketPeopleTypes';
import {
  makeDutyReportRecord,
  makeVatReportRecord,
} from '../../model/types/calculationTypes';

export type MainCategory =
  | 'Foods'
  | 'Alcohol'
  | 'TobaccoProducts'
  | 'OtherGoods';

type MainCategoriesType = ImmutableSetType<MainCategory>;

const MainCategories: MainCategoriesType = Immutable.Set.of(
  'Foods',
  'Alcohol',
  'TobaccoProducts',
  'OtherGoods'
);

type Settings = {
  people: People,
  overAllowance: boolean,
  largeAmounts: boolean,
  mainCategories: MainCategoriesType,
};

const makeSettingsRecord: RecordFactory<Settings> = Immutable.Record({
  people: makePeopleRecord(),
  overAllowance: true,
  largeAmounts: true,
  mainCategories: MainCategories,
});

type SettingsType = RecordOf<Settings>;

type StateObj = {
  basket: Basket,
  vatReport: VatReport,
  dutyReport: DutyReport,
  settings: SettingsType,
};

export const getInitialState: RecordFactory<StateObj> = Immutable.Record({
  basket: emptyBasket,
  vatReport: makeVatReportRecord(),
  dutyReport: makeDutyReportRecord(),
  settings: makeSettingsRecord(),
});

export type State = RecordOf<StateObj>;
