import { StyleSheet, Platform } from 'react-native';
import { scale, verticalScale, moderateScale } from './Scaling';

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
  appTitleWrapper: {
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        width: '78%',
      },
      android: {
        width: '70%',
      },
    }),
    justifyContent: 'space-between',
  },
  logo: {
    width: scale(52),
    height: null,
  },
  appTitleToll: {
    color: '#1A1A1A',
    fontFamily: 'roboto_bold',
    fontSize: moderateScale(56),
  },
  appTitleCalc: {
    fontFamily: 'roboto_light',
    fontSize: moderateScale(56),
  },
  currentLanguageView: {
    paddingHorizontal: scale(45),
    paddingVertical: verticalScale(15),
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 5,
    borderBottomColor: '#DC0018',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
  },
  currentLanguageText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(48),
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
  languageButton: {
    backgroundColor: '#fff',
    paddingVertical: verticalScale(17),
    paddingHorizontal: scale(33),
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 2,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
  },
  languageButtonText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(18),
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
