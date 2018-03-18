// @flow

import Immutable from 'immutable';
import type {
  Category,
  CategoryInfoType,
  RatesType,
} from './types/basketPeopleAmountsTypes';
import {
  makeCategoryInfoRecord,
  makeDutyBracketRecord,
  makeRatesRecord,
} from './types/basketPeopleAmountsTypes';

export const INDIVIDUALALLOWANCE: number = 300;

export const OVERALLVATRATE = 0.077;

export const CATEGORIES: Set<Category> = new Set([
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

export const categoriesArray = Array.from(CATEGORIES.values());

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
      rounding: 0.1,
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
      rounding: 0.1,
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
      rounding: 0.1,
    }),
  ],
  [
    'OtherFood',
    makeRatesRecord({
      vat: 0.025,
      duty: Immutable.List(),
      dutyAllowance: Infinity,
      adultsOnly: false,
      rounding: 0.1,
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
      rounding: 0.1,
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
      rounding: 0.1,
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
      adultsOnly: true,
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
      dutyAllowanceDependency: 'Cigarettes',
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
      vat: 0.08,
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
      name: 'Fleisch und Fleischzub',
      unit: 'kilo',
      icon: 'meat',
    }),
  ],
  [
    'Butter',
    makeCategoryInfoRecord({
      name: 'Butter und Rahm',
      unit: 'kiloOrLiter',
      icon: 'butter',
    }),
  ],
  [
    'Oils',
    makeCategoryInfoRecord({
      name: 'Öle, Fette, Margarine zu Speisezwecken',
      unit: 'kiloOrLiter',
      icon: 'oil',
    }),
  ],
  [
    'OtherFood',
    makeCategoryInfoRecord({
      name: 'Sonstige Lebensmittel & Alkoholfreie Getranke',
      unit: 'kiloOrLiter',
      icon: 'oil',
    }),
  ],
  [
    'Other',
    makeCategoryInfoRecord({
      name: 'Sonstige Waren',
      unit: 'noUnit',
      icon: 'oil',
    }),
  ],
  [
    'AlcSoft',
    makeCategoryInfoRecord({
      name: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
      unit: 'liter',
      icon: 'beer',
    }),
  ],
  [
    'AlcHard',
    makeCategoryInfoRecord({
      name: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
      unit: 'liter',
      icon: 'vodka',
    }),
  ],
  [
    'Cigarettes',
    makeCategoryInfoRecord({
      name: 'Zigaretten/Zigarren',
      unit: 'unit',
      icon: 'cigarette',
    }),
  ],
  [
    'Tobacco',
    makeCategoryInfoRecord({
      name: 'Andere Tabakfabrikate',
      unit: 'gram',
      icon: 'cigarette',
    }),
  ],
  [
    'Meds',
    makeCategoryInfoRecord({
      name: 'Medikamente',
      unit: 'noUnit',
      icon: 'cigarette',
    }),
  ],
  [
    'Books',
    makeCategoryInfoRecord({
      name: 'Bücher',
      unit: 'noUnit',
      icon: 'cigarette',
    }),
  ],
  [
    'Magazines',
    makeCategoryInfoRecord({
      name: 'Zeitschriften',
      unit: 'noUnit',
      icon: 'cigarette',
    }),
  ],
  [
    'Flowers',
    makeCategoryInfoRecord({
      name: 'Schnittblumen & Pflanzen',
      unit: 'noUnit',
      icon: 'cigarette',
    }),
  ],
  [
    'AnimalFeed',
    makeCategoryInfoRecord({
      name: 'Tierfutter',
      unit: 'noUnit',
      icon: 'cigarette',
    }),
  ],
  [
    'Fertilizer',
    makeCategoryInfoRecord({
      name: 'Dünger',
      unit: 'noUnit',
      icon: 'cigarette',
    }),
  ],
]);
