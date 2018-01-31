// @flow

type InformationData = {
  id: number,
  source: string,
  dataMainText: string,
  dataSubText: string,
};

const Sign = require('../../../assets/icons/info/Sign.png');
const ID = require('../../../assets/icons/info/ID.png');
const Basket = require('../../../assets/icons/info/Basket.png');
const Pets = require('../../../assets/icons/info/Pets.png');
const Car = require('../../../assets/icons/info/Car.png');
const Railway = require('../../../assets/icons/info/Railway.png');
const Syringe = require('../../../assets/icons/info/Syringe.png');

export const informationData: Array<InformationData> = [
  {
    id: 1,
    source: Sign,
    dataMainText: 'proceedinAtTheCustoms',
    dataSubText: 'proceedinAtTheCustomsSubText',
  },
  {
    id: 2,
    source: ID,
    dataMainText: 'travelDocuments',
    dataSubText: 'travelDocumentsSubText',
  },
  {
    id: 3,
    source: Basket,
    dataMainText: 'haveGoodsWithMe',
    dataSubText: 'haveGoodsWithMeSubText',
  },
  {
    id: 4,
    source: Pets,
    dataMainText: 'haveAnimalsOrPlantsWithMe',
    dataSubText: 'haveAnimalsOrPlantsWithMeSubText',
  },
  {
    id: 5,
    source: Car,
    dataMainText: 'travelingWithVehicle',
    dataSubText: 'travelingWithVehicleSubText',
  },
  {
    id: 6,
    source: Railway,
    dataMainText: 'entryByTrain',
    dataSubText: 'entryByTrainSubText',
  },
  {
    id: 7,
    source: Syringe,
    dataMainText: 'prohibitions',
    dataSubText: 'prohibitionsSubText',
  },
];
