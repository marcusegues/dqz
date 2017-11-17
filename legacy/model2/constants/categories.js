// @flow
import type {
  CategoryName,
  Categories,
  CategoriesList,
  CategoriesInfoType,
} from '../types/basket';
import { makeCategoryInfoRecord } from '../types/basket';
import { List as ImmutableListType } from 'immutable';
import Immutable from 'immutable';

// CATEGORIES and CATEGORIES_LIST are the two base objects containing
// all the categories. If a new category needs to be added, it is added to
// both of these objects

export const CATEGORIES: Categories = {
  MEAT_AND_MEAT_PRODUCTS: 'MEAT_AND_MEAT_PRODUCTS',
  BUTTER_OR_CREAM: 'BUTTER_OR_CREAM',
  OILS_FATS_MARGARINE: 'OILS_FATS_MARGARINE',
  OTHER_FOODS: 'OTHER_FOODS',
  ALCOHOL_BELOW_18: 'ALCOHOL_BELOW_18',
  ALCOHOL_ABOVE_18: 'ALCOHOL_ABOVE_18',
  CIGARETTES_AND_CIGARS: 'CIGARETTES_AND_CIGARS',
  OTHER_TOBACCO: 'OTHER_TOBACCO',
  MEDICINE: 'MEDICINE',
  BOOKS: 'BOOKS',
  MAGAZINES: 'MAGAZINES',
  FLOWERS_AND_PLANTS: 'FLOWERS_AND_PLANTS',
  ANIMAL_FEED: 'ANIMAL_FEED',
  FERTILIZER: 'FERTILIZER',
  OTHER_GOODS: 'OTHER_GOODS',
};

export const CATEGORIES_LIST: CategoriesList = Immutable.List([
  CATEGORIES.MEAT_AND_MEAT_PRODUCTS,
  CATEGORIES.BUTTER_OR_CREAM,
  CATEGORIES.OILS_FATS_MARGARINE,
  CATEGORIES.OTHER_FOODS,
  CATEGORIES.ALCOHOL_BELOW_18,
  CATEGORIES.ALCOHOL_ABOVE_18,
  CATEGORIES.CIGARETTES_AND_CIGARS,
  CATEGORIES.OTHER_TOBACCO,
  CATEGORIES.MEDICINE,
  CATEGORIES.BOOKS,
  CATEGORIES.MAGAZINES,
  CATEGORIES.FLOWERS_AND_PLANTS,
  CATEGORIES.ANIMAL_FEED,
  CATEGORIES.FERTILIZER,
  CATEGORIES.OTHER_GOODS,
]);

// null unit means it's zollfrei
export const CATEGORIES_INFO: CategoriesInfoType = Immutable.Map([
  [
    CATEGORIES.MEAT_AND_MEAT_PRODUCTS,
    makeCategoryInfoRecord({
      name: 'Fleisch und Fleischzubereitung',
      unit: 'kg',
      icon: 'meat',
    }),
  ],
  [
    CATEGORIES.BUTTER_OR_CREAM,
    makeCategoryInfoRecord({
      name: 'Butter und Rahm',
      unit: 'kg/Liter',
      icon: 'butter',
    }),
  ],
  [
    CATEGORIES.OILS_FATS_MARGARINE,
    makeCategoryInfoRecord({
      name: 'Öle, Fette, Margarine zu Speisezwecken',
      unit: 'kg/Liter',
      icon: 'oil',
    }),
  ],
  [
    CATEGORIES.OTHER_FOODS,
    makeCategoryInfoRecord({
      name: 'Sonstige Lebensmittel & Alkoholfreie Getranke',
      unit: 'kg/Liter',
      icon: 'oil',
    }),
  ],
  [
    CATEGORIES.ALCOHOL_BELOW_18,
    makeCategoryInfoRecord({
      name: 'Alkoholische Getränke, Alkoholgehalt bis 18% Vol.',
      unit: 'Liter',
      icon: 'beer',
    }),
  ],
  [
    CATEGORIES.ALCOHOL_ABOVE_18,
    makeCategoryInfoRecord({
      name: 'Alkoholische Getränke, Alkoholgehalt über 18% Vol.',
      unit: 'Liter',
      icon: 'vodka',
    }),
  ],
  [
    CATEGORIES.CIGARETTES_AND_CIGARS,
    makeCategoryInfoRecord({
      name: 'Zigaretten/Zigarren',
      unit: 'Stück',
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.OTHER_TOBACCO,
    makeCategoryInfoRecord({
      name: 'Andere Tabakfabrikate',
      unit: 'Gramm',
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.MEDICINE,
    makeCategoryInfoRecord({
      name: 'Medikamente',
      unit: null,
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.BOOKS,
    makeCategoryInfoRecord({
      name: 'Bucher',
      unit: null,
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.MAGAZINES,
    makeCategoryInfoRecord({
      name: 'Zeitschriften',
      unit: null,
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.FLOWERS_AND_PLANTS,
    makeCategoryInfoRecord({
      name: 'Schnittblumen & Pflanzen',
      unit: null,
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.ANIMAL_FEED,
    makeCategoryInfoRecord({
      name: 'Tierfutter',
      unit: null,
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.FERTILIZER,
    makeCategoryInfoRecord({
      name: 'Dunger',
      unit: null,
      icon: 'cigarette',
    }),
  ],
  [
    CATEGORIES.OTHER_GOODS,
    makeCategoryInfoRecord({
      name: 'Sonstige Waren',
      unit: null,
      icon: 'cigarette',
    }),
  ],
]);
