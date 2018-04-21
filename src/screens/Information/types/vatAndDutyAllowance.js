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

const dutyAllowanceDiagramDE = require('../../../../assets/images/info/dutyAllowanceDiagram_DE.png');
const dutyAllowanceDiagramFR = require('../../../../assets/images/info/dutyAllowanceDiagram_FR.png');
const dutyAllowanceDiagramEN = require('../../../../assets/images/info/dutyAllowanceDiagram_EN.png');
const dutyAllowanceDiagramIT = require('../../../../assets/images/info/dutyAllowanceDiagram_IT.png');

const vatAllowanceOver300DiagramIT = require('../../../../assets/images/info/vatAllowanceOver300Diagram_IT.png');
const vatAllowanceOver300DiagramEN = require('../../../../assets/images/info/vatAllowanceOver300Diagram_EN.png');
const vatAllowanceOver300DiagramFR = require('../../../../assets/images/info/vatAllowanceOver300Diagram_FR.png');
const vatAllowanceOver300DiagramDE = require('../../../../assets/images/info/vatAllowanceOver300Diagram_DE.png');

const vatAllowanceCurrencyCHF = 'CHF';
const vatAllowanceCurrencyFR = 'fr.';

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

export const dutyAllowanceDiagrams: vatAllowanceImagesType = {
  de: dutyAllowanceDiagramDE,
  it: dutyAllowanceDiagramIT,
  fr: dutyAllowanceDiagramFR,
  en: dutyAllowanceDiagramEN,
};

export const vatAllowanceOver300Diagrams: vatAllowanceImagesType = {
  de: vatAllowanceOver300DiagramDE,
  it: vatAllowanceOver300DiagramIT,
  fr: vatAllowanceOver300DiagramFR,
  en: vatAllowanceOver300DiagramEN,
};

export const vatAllowanceCurrencies: vatAllowanceImagesType = {
  de: vatAllowanceCurrencyCHF,
  it: vatAllowanceCurrencyCHF,
  en: vatAllowanceCurrencyCHF,
  fr: vatAllowanceCurrencyFR,
};
