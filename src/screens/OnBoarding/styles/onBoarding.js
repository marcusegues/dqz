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
    fontSize: moderateScale(28),
    textAlign: 'center',
  },
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(28),
    textAlign: 'center',
  },
  selectLanguageText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(18),
    paddingBottom: verticalScale(15),
  },
  languageButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  saveSettingsButtonContainer: {
    flexDirection: 'row',
  },
  saveSettingsButton: {
    flex: 1,
    width: '100%',
    backgroundColor: '#006699',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveSettingsButtonText: {
    paddingVertical: verticalScale(20),
    color: '#fff',
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(18),
  },
});
