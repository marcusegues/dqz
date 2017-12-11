// @flow
import type { List as ImmutableList } from 'immutable';
import Immutable from 'immutable';

export type LanguageButtonSizeType = 'small' | 'large';
export type LanguageButtonSelectedType = boolean;
export type LanguageCodeType = 'en' | 'de' | 'fr' | 'it';

export const languageCodeList: ImmutableList<LanguageCodeType> = Immutable.List(
  ['en', 'de', 'fr', 'it']
);
