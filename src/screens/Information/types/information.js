// @flow
import type { OrderedSet as ImmutableOrderedSetType } from 'immutable';
import Immutable from 'immutable';

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

type DeclarationSubCategories = ImmutableOrderedSetType<DeclarationSubCategory>;

export const declarationSubCategories: DeclarationSubCategories = Immutable.OrderedSet(
  ['vatAllowance', 'dutyAllowance', 'personalEffects', 'foreignVat']
);

type AnimalsAndPlantsSubCategory =
  | 'animals'
  | 'plants'
  | 'souvenirsAndSpeciesProtection';

type AnimalsAndPlantsSubCategories = ImmutableOrderedSetType<
  AnimalsAndPlantsSubCategory
>;

export const animalsAndPlantsSubCategories: AnimalsAndPlantsSubCategories = Immutable.OrderedSet(
  ['animals', 'plants', 'souvenirsAndSpeciesProtection']
);

type VehiclesSubCategory = 'highwayVignette' | 'roadTax' | 'fuelAndRepairs';

type VehiclesSubCategories = ImmutableOrderedSetType<VehiclesSubCategory>;

export const vehiclesSubCategories: VehiclesSubCategories = Immutable.OrderedSet(
  ['highwayVignette', 'roadTax', 'fuelAndRepairs']
);

type ProhibitionsAndRestrictionsSubCategory = 'forgery' | 'cash';

type ProhibitionsAndRestrictionsSubCategories = ImmutableOrderedSetType<
  ProhibitionsAndRestrictionsSubCategory
>;

export const prohibitionsAndRestrictionsSubCategories: ProhibitionsAndRestrictionsSubCategories = Immutable.OrderedSet(
  ['forgery', 'cash']
);

type InfoSubCategories =
  | DeclarationSubCategories
  | AnimalsAndPlantsSubCategories
  | VehiclesSubCategories
  | ProhibitionsAndRestrictionsSubCategories;

export type InformationSubCategoriesType = {
  [InfoCategory]: InfoSubCategories | 'noSubCategories',
};

export type InformationImagesType = { [InfoCategory]: string };
