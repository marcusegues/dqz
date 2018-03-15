// @flow
import type { LanguageCategory } from '../../../components/QuestionAnswer/Cards/AnswerCard/types/amountAndQuantityInput';

const oneTravelerDE = require('../../../../assets/images/info/vatAllowanceInfographic1_DE.png');
const oneTravelerEN = require('../../../../assets/images/info/vatAllowanceInfographic1_EN.png');
const oneTravelerIT = require('../../../../assets/images/info/vatAllowanceInfographic1_IT.png');
const oneTravelerFR = require('../../../../assets/images/info/vatAllowanceInfographic1_FR.png');
const moreTravelersDE = require('../../../../assets/images/info/vatAllowanceInfographic2_DE.png');
const moreTravelersEN = require('../../../../assets/images/info/vatAllowanceInfographic2_EN.png');
const moreTravelersIT = require('../../../../assets/images/info/vatAllowanceInfographic2_IT.png');
const moreTravelersFR = require('../../../../assets/images/info/vatAllowanceInfographic2_FR.png');

type vatAllowanceImagesType = { [LanguageCategory]: string };

export const vatAllowanceOneTravelerImages: vatAllowanceImagesType = {
  de: oneTravelerDE,
  it: oneTravelerIT,
  fr: oneTravelerFR,
  en: oneTravelerEN,
};

export const vatAllowanceMoreTravelersImages: vatAllowanceImagesType = {
  de: moreTravelersDE,
  it: moreTravelersIT,
  fr: moreTravelersFR,
  en: moreTravelersEN,
};
