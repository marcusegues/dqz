// @flow

// Level 1 Categories
import type { LanguageCategory } from '../InformationScreens/subCategories/RoadTax';

export type InfoCategory =
  | 'customsProcedures'
  | 'travelDocuments'
  | 'declaration'
  | 'animalsAndPlants'
  | 'vehicles'
  | 'entryByTrain'
  | 'prohibitionsAndRestrictions'
  | 'purchasesOnlineOffline'
  | 'borderCrossings';

type InfoCategoriesType = [
  'customsProcedures',
  'travelDocuments',
  'declaration',
  'animalsAndPlants',
  'vehicles',
  'entryByTrain',
  'prohibitionsAndRestrictions',
  'purchasesOnlineOffline',
  'borderCrossings',
];

export const infoCategories: InfoCategoriesType = [
  'customsProcedures',
  'travelDocuments',
  'declaration',
  'animalsAndPlants',
  'vehicles',
  'entryByTrain',
  'prohibitionsAndRestrictions',
  'purchasesOnlineOffline',
  'borderCrossings',
];

// Level 2 (Sub)Categories
type DeclarationSubCategory =
  | 'vatAllowance'
  | 'dutyAllowance'
  | 'personalEffects'
  | 'foreignVat';

type DeclarationSubCategories = [
  'vatAllowance',
  'dutyAllowance',
  'personalEffects',
  'foreignVat',
];

export const declarationSubCategories: DeclarationSubCategories = [
  'vatAllowance',
  'dutyAllowance',
  'personalEffects',
  'foreignVat',
];

type AnimalsAndPlantsSubCategory =
  | 'animals'
  | 'plants'
  | 'souvenirsAndSpeciesProtection';

type AnimalsAndPlantsSubCategories = [
  'animals',
  'plants',
  'souvenirsAndSpeciesProtection',
];

export const animalsAndPlantsSubCategories: AnimalsAndPlantsSubCategories = [
  'animals',
  'plants',
  'souvenirsAndSpeciesProtection',
];

type VehiclesSubCategory = 'highwayVignette' | 'roadTax' | 'fuelAndRepairs';

type VehiclesSubCategories = ['highwayVignette', 'roadTax', 'fuelAndRepairs'];

export const vehiclesSubCategories: VehiclesSubCategories = [
  'highwayVignette',
  'roadTax',
  'fuelAndRepairs',
];

type ProhibitionsAndRestrictionsSubCategory =
  | 'forgery'
  | 'cash'
  | 'food'
  | 'authorisationRequirements';

type ProhibitionsAndRestrictionsSubCategories = [
  'forgery',
  'cash',
  'food',
  'authorisationRequirements',
];

export const prohibitionsAndRestrictionsSubCategories: ProhibitionsAndRestrictionsSubCategories = [
  'forgery',
  'cash',
  'food',
  'authorisationRequirements',
];

type InfoSubCategories =
  | DeclarationSubCategories
  | AnimalsAndPlantsSubCategories
  | VehiclesSubCategories
  | ProhibitionsAndRestrictionsSubCategories;

export type InformationSubCategoriesType = {
  [InfoCategory]: InfoSubCategories | 'noSubCategories',
};

type InfoCategoryExtended =
  | InfoCategory
  | ProhibitionsAndRestrictionsSubCategory
  | VehiclesSubCategory
  | DeclarationSubCategory
  | AnimalsAndPlantsSubCategory;

export type InformationImagesType = { [InfoCategoryExtended]: string };

export type InformationNavigateToType = {
  [InfoCategoryExtended]: InfoSubCategories | string,
};

type borderCrossingsLinksType = { [LanguageCategory]: string };

export const borderCrossingsLinks: borderCrossingsLinksType = {
  de: 'http://www.pwebapps.ezv.admin.ch/apps/dst/?lang=1',
  it: 'http://www.pwebapps.ezv.admin.ch/apps/dst/?lang=3',
  fr: 'http://www.pwebapps.ezv.admin.ch/apps/dst/?lang=2',
  en: 'http://www.pwebapps.ezv.admin.ch/apps/dst/?lang=4',
};
