// @flow

import type {
  CategoriesTypes,
  CategoryInfoType,
  RatesType,
} from './types/basketPeopleTypes';
import Immutable from 'immutable';
import {
  makeCategoryInfoRecord,
  makeDutyBracketRecord,
  makeRatesRecord,
} from './types/basketPeopleTypes';

export const IndividualAllowanceAdult: number = 300;
export const IndividualAllowanceMinor: number = 300;

export const CATEGORIES: Set<CategoriesTypes> = new Set([
  'Meat',
  'Butter',
  'Oils',
  'OtherFood',
  'AlcSoft',
  'AlcHard',
  'Cigarettes',
  'Tobacco',
  'Meds',
  'Books',
  'Magazines',
  'Flowers',
  'AnimalFeed',
  'Fertilizer',
  'Other',
]);

export const CategoriesArray = Array.from(CATEGORIES.values());

export const CategoriesRates: RatesType = Immutable.Map([
  [
    'Meat',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List([
        makeDutyBracketRecord({ threshold: 10, fee: 17 }),
        makeDutyBracketRecord({ threshold: Infinity, fee: 23 }),
      ]),
      dutyAllowance: 1,
      adultsOnly: false,
    }),
  ],
  [
    'Butter',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List([
        makeDutyBracketRecord({ threshold: Infinity, fee: 16 }),
      ]),
      dutyAllowance: 1,
      adultsOnly: false,
    }),
  ],
  [
    'Oils',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List([
        makeDutyBracketRecord({ threshold: Infinity, fee: 2 }),
      ]),
      dutyAllowance: 5,
      adultsOnly: false,
    }),
  ],
  [
    'OtherFood',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
  [
    'AlcSoft',
    makeRatesRecord({
      vat: 0.08,
      duty: Immutable.List([
        makeDutyBracketRecord({ threshold: Infinity, fee: 2 }),
      ]),
      dutyAllowance: 5,
      adultsOnly: true,
    }),
  ],
  [
    'AlcHard',
    makeRatesRecord({
      vat: 0.08,
      duty: Immutable.List([
        makeDutyBracketRecord({ threshold: Infinity, fee: 15 }),
      ]),
      dutyAllowance: 1,
      adultsOnly: true,
    }),
  ],
  [
    'Cigarettes',
    makeRatesRecord({
      vat: 0.08,
      duty: Immutable.List([
        makeDutyBracketRecord({ threshold: Infinity, fee: 0.25 }),
      ]),
      dutyAllowance: 250,
      adultsOnly: false,
    }),
  ],
  [
    'Tobacco',
    makeRatesRecord({
      vat: 0.08,
      duty: Immutable.List([
        makeDutyBracketRecord({ threshold: Infinity, fee: 0.1 }),
      ]),
      dutyAllowance: 250,
      adultsOnly: true,
    }),
  ],
  [
    'Meds',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
  [
    'Books',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
  [
    'Magazines',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
  [
    'Flowers',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
  [
    'AnimalFeed',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
  [
    'Fertilizer',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
  [
    'Other',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
    }),
  ],
]);

export const CategoriesInfo: CategoryInfoType = Immutable.Map([
  [
    'Meat',
    makeCategoryInfoRecord({
      name: 'Fleisch und Fleischzubereitung',
      unit: 'kg',
      icon: 'meat',
    }),
  ],
  [
    'Butter',
    makeCategoryInfoRecord({
      name: 'Butter und Rahm',
      unit: 'kg/Liter',
      icon: 'butter',
    }),
  ],
  [
    'Oils',
    makeCategoryInfoRecord({
      name: 'Öle, Fette, Margarine zu Speisezwecken',
      unit: 'kg/Liter',
      icon: 'oil',
    }),
  ],
  [
    'OtherFood',
    makeCategoryInfoRecord({
      name: 'Sonstige Lebensmittel & Alkoholfreie Getranke',
      unit: 'kg/Liter',
      icon: 'oil',
    }),
  ],
  [
    'Other',
    makeCategoryInfoRecord({
      name: 'Sonstige Lebensmittel & Alkoholfreie Getranke',
      unit: 'kg/Liter',
      icon: 'oil',
    }),
  ],
  [
    'AlcSoft',
    makeCategoryInfoRecord({
      name: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
      unit: 'Liter',
      icon: 'beer',
    }),
  ],
  [
    'AlcHard',
    makeCategoryInfoRecord({
      name: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
      unit: 'Liter',
      icon: 'vodka',
    }),
  ],
  [
    'Cigarettes',
    makeCategoryInfoRecord({
      name: 'Zigaretten/Zigarren',
      unit: 'Stück',
      icon: 'cigarette',
    }),
  ],
  [
    'Tobacco',
    makeCategoryInfoRecord({
      name: 'Andere Tabakfabrikate',
      unit: 'Gramm',
      icon: 'cigarette',
    }),
  ],
  [
    'Meds',
    makeCategoryInfoRecord({
      name: 'Medikamente',
      unit: '',
      icon: 'cigarette',
    }),
  ],
  [
    'Books',
    makeCategoryInfoRecord({
      name: 'Bücher',
      unit: '',
      icon: 'cigarette',
    }),
  ],
  [
    'Magazines',
    makeCategoryInfoRecord({
      name: 'Zeitschriften',
      unit: '',
      icon: 'cigarette',
    }),
  ],
  [
    'Flowers',
    makeCategoryInfoRecord({
      name: 'Schnittblumen & Pflanzen',
      unit: '',
      icon: 'cigarette',
    }),
  ],
  [
    'AnimalFeed',
    makeCategoryInfoRecord({
      name: 'Tierfutter',
      unit: '',
      icon: 'cigarette',
    }),
  ],
  [
    'Fertilizer',
    makeCategoryInfoRecord({
      name: 'Dünger',
      unit: '',
      icon: 'cigarette',
    }),
  ],
]);
