// @flow
import type {
  RecordOf,
  RecordFactory,
  Set as ImmutableSetType,
} from 'immutable';
import Immutable from 'immutable';
import type { Basket, People } from '../../model/types/basketPeopleTypes';
import type { VatReport, DutyReport } from '../../model/types/calculationTypes';
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

export type MainCategoriesType = ImmutableSetType<MainCategory>;

export const MainCategories: MainCategoriesType = Immutable.Set.of(
  'Foods',
  'Alcohol',
  'TobaccoProducts',
  'OtherGoods'
);

export const makeMainCategoriesSet = (): MainCategoriesType =>
  Immutable.Set.of('Foods', 'Alcohol', 'TobaccoProducts', 'OtherGoods');

type Settings = {
  overAllowance: boolean,
  largeAmountPresent: boolean,
  mainCategories: MainCategoriesType,
};

const makeSettingsRecord: RecordFactory<Settings> = Immutable.Record({
  overAllowance: true,
  largeAmountPresent: true,
  mainCategories: makeMainCategoriesSet(),
});

type SettingsType = RecordOf<Settings>;

type StateObj = {
  people: People,
  basket: Basket,
  vatReport: VatReport,
  dutyReport: DutyReport,
  settings: SettingsType,
};

export const getInitialState: RecordFactory<StateObj> = Immutable.Record({
  people: makePeopleRecord(),
  basket: emptyBasket,
  vatReport: makeVatReportRecord(),
  dutyReport: makeDutyReportRecord(),
  settings: makeSettingsRecord(),
});

export type State = RecordOf<StateObj>;
