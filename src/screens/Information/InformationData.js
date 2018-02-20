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

export const informationImages: InformationImagesType = {
  customsProcedures: Sign,
  travelDocuments: ID,
  declaration: Basket,
  animalsAndPlants: Pets,
  vehicles: Car,
  entryByTrain: Railway,
  prohibitionsAndRestrictions: Restricted,
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
