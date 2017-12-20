import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(20),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcomeTitle: {
    fontFamily: 'roboto_bold',
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(18),
    textAlign: 'center',
    lineHeight: moderateScale(27),
    color: '#4A4A4A',
  },
  selectLanguageText: {
    color: '#4A4A4A',
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(18),
    paddingBottom: verticalScale(15),
  },
  languageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
