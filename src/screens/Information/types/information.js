// @flow

// Level 1 Categories
type InfoCategory =
  | 'customsProcedures'
  | 'travelDocuments'
  | 'declaration'
  | 'animalsAndPlants'
  | 'vehicles'
  | 'entryByTrain'
  | 'prohibitionsAndRestrictions';

type InfoCategoriesType = Array<InfoCategory>;

export const infoCategories: InfoCategoriesType = [
  'customsProcedures',
  'travelDocuments',
  'declaration',
  'animalsAndPlants',
  'vehicles',
  'entryByTrain',
  'prohibitionsAndRestrictions',
];

// Level 2 (Sub)Categories
type DeclarationSubCategory =
  | 'vatAllowance'
  | 'dutyAllowance'
  | 'personalEffects'
  | 'foreignVat';

type DeclarationSubCategories = Array<DeclarationSubCategory>;

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

type AnimalsAndPlantsSubCategories = Array<AnimalsAndPlantsSubCategory>;

export const animalsAndPlantsSubCategories: AnimalsAndPlantsSubCategories = [
  'animals',
  'plants',
  'souvenirsAndSpeciesProtection',
];

type VehiclesSubCategory = 'highwayVignette' | 'roadTax' | 'fuelAndRepairs';

type VehiclesSubCategories = Array<VehiclesSubCategory>;

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

type ProhibitionsAndRestrictionsSubCategories = Array<
  ProhibitionsAndRestrictionsSubCategory
>;

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

export type InformationImagesType = { [InfoCategory]: string };
