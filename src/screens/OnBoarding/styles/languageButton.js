// @flow
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import type {
  LanguageButtonSelectedType,
  LanguageButtonSizeType,
} from '../subcomponents/LanguageButton';

type StyleOptionsType = {
  size: LanguageButtonSizeType,
  selected: LanguageButtonSelectedType,
};

export const languageButton = (styleOptions: StyleOptionsType) => {
  const { size, selected } = styleOptions;
  return {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: size === 'small' ? scale(26) : scale(45),
    paddingVertical: size === 'small' ? verticalScale(11) : verticalScale(15),
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: selected ? '#DC0018' : '#fff',
    borderRadius: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    marginHorizontal: 10,
  };
};

export const languageButtonText = (styleOptions: StyleOptionsType) => {
  const { size, selected } = styleOptions;
  return {
    fontFamily: selected ? 'roboto_medium' : 'roboto_regular',
    fontSize: size === 'small' ? moderateScale(18) : moderateScale(44),
    textAlign: 'center',
  };
};
