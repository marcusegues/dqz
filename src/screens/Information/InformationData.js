// @flow

import {
  animalsAndPlantsSubCategories,
  declarationSubCategories,
  prohibitionsAndRestrictionsSubCategories,
  vehiclesSubCategories,
} from './types/information';
import type {
  InformationImagesType,
  InformationSubCategoriesType,
} from './types/information';

const Sign = require('../../../assets/icons/info/Sign.png');
const ID = require('../../../assets/icons/info/ID.png');
const Basket = require('../../../assets/icons/info/Basket.png');
const Pets = require('../../../assets/icons/info/Pets.png');
const Car = require('../../../assets/icons/info/Car.png');
const Railway = require('../../../assets/icons/info/Railway.png');
const Restricted = require('../../../assets/icons/info/Restricted.png');
const BelowCHF300 = require('../../../assets/icons/info/BelowCHF300.png');
const AlcoCigarettesMeat = require('../../../assets/icons/info/AlcoCigarettesMeat.png');
const Suitcase = require('../../../assets/icons/info/Suitcase.png');
const CreditCard = require('../../../assets/icons/info/CreditCard.png');
const Animals = require('../../../assets/icons/info/Animals.png');
const Plants = require('../../../assets/icons/info/Plants.png');
const Souvenirs = require('../../../assets/icons/info/Souvenirs.png');
const MotorwayTaxSticker = require('../../../assets/icons/info/MotorwayTaxSticker.png');
const HeavyVehicles = require('../../../assets/icons/info/HeavyVehicles.png');
const Fuel = require('../../../assets/icons/info/Fuel.png');
const Watches = require('../../../assets/icons/info/Watches.png');
const Cash = require('../../../assets/icons/info/Cash.png');
const Food = require('../../../assets/icons/info/Food.png');
const AuthorisationRequirements = require('../../../assets/icons/info/AuthorisationRequirements.png');

export const informationImages: InformationImagesType = {
  customsProcedures: Sign,
  travelDocuments: ID,
  declaration: Basket,
  animalsAndPlants: Pets,
  vehicles: Car,
  entryByTrain: Railway,
  prohibitionsAndRestrictions: Restricted,
  vatAllowance: BelowCHF300,
  dutyAllowance: AlcoCigarettesMeat,
  personalEffects: Suitcase,
  foreignVat: CreditCard,
  animals: Animals,
  plants: Plants,
  souvenirsAndSpeciesProtection: Souvenirs,
  highwayVignette: MotorwayTaxSticker,
  roadTax: HeavyVehicles,
  fuelAndRepairs: Fuel,
  forgery: Watches,
  cash: Cash,
  food: Food,
  authorisationRequirements: AuthorisationRequirements,
};

export const informationSubCategories: InformationSubCategoriesType = {
  customsProcedures: 'noSubCategories',
  travelDocuments: 'noSubCategories',
  declaration: declarationSubCategories,
  animalsAndPlants: animalsAndPlantsSubCategories,
  vehicles: vehiclesSubCategories,
  entryByTrain: 'noSubCategories',
  prohibitionsAndRestrictions: prohibitionsAndRestrictionsSubCategories,
};

export const informationNavigateTo = {
  // customsProcedures: 'noSubCategories',
  customsProcedures: 'CustomsProcedures',
  travelDocuments: 'TravelDocuments',
  // travelDocuments: 'noSubCategories',
  declaration: declarationSubCategories,
  animalsAndPlants: animalsAndPlantsSubCategories,
  vehicles: vehiclesSubCategories,
  // entryByTrain: 'noSubCategories',
  entryByTrain: 'EntryByTrain',
  prohibitionsAndRestrictions: prohibitionsAndRestrictionsSubCategories,
  vatAllowance: 'VatAllowance',
  dutyAllowance: 'DutyAllowance',
  personalEffects: 'PersonalEffects',
  foreignVat: 'ForeignVat',
  animals: 'Animals',
  plants: 'Plants',
  souvenirsAndSpeciesProtection: 'SouvenirsAndSpeciesProtection',
  highwayVignette: 'HighwayVignette',
  roadTax: 'RoadTax',
  fuelAndRepairs: 'FuelAndRepairs',
  forgery: 'Forgery',
  cash: 'Cash',
  food: 'Food',
  authorisationRequirements: 'AuthorisationRequirements',
};
