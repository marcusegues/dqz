// @flow
const Mwst = require('../../../../../../assets/icons/mwst.png');
const Iva = require('../../../../../../assets/icons/iva.png');
const Tva = require('../../../../../../assets/icons/tva.png');
const Vat = require('../../../../../../assets/icons/vat.png');
const Zoll = require('../../../../../../assets/icons/zoll.png');
const Dogana = require('../../../../../../assets/icons/dogana.png');
const Duoane = require('../../../../../../assets/icons/duoane.png');
const Customs = require('../../../../../../assets/icons/customs.png');

export type LanguageCategory = 'de' | 'en' | 'it' | 'fr';

export type amountInputImagesType = { [LanguageCategory]: string };

export type quantityInputImagesType = { [LanguageCategory]: string };

export const amountInputImages: amountInputImagesType = {
  de: Mwst,
  it: Iva,
  fr: Tva,
  en: Vat,
};

export const quantityInputImages: quantityInputImagesType = {
  de: Zoll,
  it: Dogana,
  fr: Duoane,
  en: Customs,
};
