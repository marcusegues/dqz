// @flow
// $FlowFixMe
import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale } from '../../../styles/Scaling';

export const onBoardingStyles: any = StyleSheet.create({
  selectLanguageText: {
    color: '#4A4A4A',
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(18),
    paddingBottom: verticalScale(15),
  },
  languageButtonsSection: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  languageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
