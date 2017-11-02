// @flow

import type { CategoriesTypes, CategoryInfoType, RatesType } from './types';

export const CATEGORIES: Set<CategoriesTypes> = new Set([
  'Meat',
  'Butter',
  'Oils',
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

export const CategoriesRates: RatesType = new Map([
  [
    'Meat',
    {
      vat: 0.025,
      duty: [{ threshold: 10, fee: 17 }, { threshold: Infinity, fee: 23 }],
      dutyAllowance: 1,
      adultsOnly: false,
    },
  ],
  [
    'Butter',
    {
      vat: 0.025,
      duty: [{ threshold: Infinity, fee: 16 }],
      dutyAllowance: 1,
      adultsOnly: false,
    },
  ],
  [
    'Oils',
    {
      vat: 0.025,
      duty: [{ threshold: Infinity, fee: 2 }],
      dutyAllowance: 5,
      adultsOnly: false,
    },
  ],
  [
    'AlcSoft',
    {
      vat: 0.08,
      duty: [{ threshold: Infinity, fee: 2 }],
      dutyAllowance: 5,
      adultsOnly: true,
    },
  ],
  [
    'AlcHard',
    {
      vat: 0.08,
      duty: [{ threshold: Infinity, fee: 15 }],
      dutyAllowance: 1,
      adultsOnly: true,
    },
  ],
  [
    'Cigarettes',
    {
      vat: 0.08,
      duty: [{ threshold: Infinity, fee: 0.25 }],
      dutyAllowance: 250,
      adultsOnly: false,
    },
  ],
  [
    'Tobacco',
    {
      vat: 0.08,
      duty: [{ threshold: Infinity, fee: 0.1 }],
      dutyAllowance: 250,
      adultsOnly: true,
    },
  ],
  [
    'Meds',
    { vat: 0.025, duty: [], dutyAllowance: Infinity, adultsOnly: false },
  ],
  [
    'Books',
    { vat: 0.025, duty: [], dutyAllowance: Infinity, adultsOnly: false },
  ],
  [
    'Magazines',
    { vat: 0.025, duty: [], dutyAllowance: Infinity, adultsOnly: false },
  ],
  [
    'Flowers',
    { vat: 0.025, duty: [], dutyAllowance: Infinity, adultsOnly: false },
  ],
  [
    'AnimalFeed',
    { vat: 0.025, duty: [], dutyAllowance: Infinity, adultsOnly: false },
  ],
  [
    'Fertilizer',
    { vat: 0.025, duty: [], dutyAllowance: Infinity, adultsOnly: false },
  ],
  [
    'Other',
    { vat: 0.025, duty: [], dutyAllowance: Infinity, adultsOnly: false },
  ],
]);

export const CategoriesInfo: CategoryInfoType = new Map([
  [
    'Meat',
    {
      name: 'Fleisch und Fleischzubereitung',
      unit: 'kg',
      icon: 'meat',
    },
  ],
  [
    'Butter',
    {
      name: 'Butter und Rahm',
      unit: 'kg/Liter',
      icon: 'butter',
    },
  ],
  [
    'Oils',
    {
      name: 'Öle, Fette, Margarine zu Speisezwecken',
      unit: 'kg/Liter',
      icon: 'oil',
    },
  ],
  [
    'Other',
    {
      name: 'Sonstige Lebensmittel & Alkoholfreie Getranke',
      unit: 'kg/Liter',
      icon: 'oil',
    },
  ],
  [
    'AlcSoft',
    {
      name: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
      unit: 'Liter',
      icon: 'beer',
    },
  ],
  [
    'AlcHard',
    {
      name: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
      unit: 'Liter',
      icon: 'vodka',
    },
  ],
  [
    'Cigarettes',
    {
      name: 'Zigaretten/Zigarren',
      unit: 'Stück',
      icon: 'cigarette',
    },
  ],
  [
    'Tobacco',
    {
      name: 'Andere Tabakfabrikate',
      unit: 'Gramm',
      icon: 'cigarette',
    },
  ],
  [
    'Meds',
    {
      name: 'Medikamente',
      unit: '',
      icon: 'cigarette',
    },
  ],
  [
    'Books',
    {
      name: 'Bücher',
      unit: '',
      icon: 'cigarette',
    },
  ],
  [
    'Magazines',
    {
      name: 'Zeitschriften',
      unit: '',
      icon: 'cigarette',
    },
  ],
  [
    'Flowers',
    {
      name: 'Schnittblumen & Pflanzen',
      unit: '',
      icon: 'cigarette',
    },
  ],
  [
    'AnimalFeed',
    {
      name: 'Tierfutter',
      unit: '',
      icon: 'cigarette',
    },
  ],
  [
    'Fertilizer',
    {
      name: 'Dünger',
      unit: '',
      icon: 'cigarette',
    },
  ],
]);

export const IndividualAllowance: number = 300;
