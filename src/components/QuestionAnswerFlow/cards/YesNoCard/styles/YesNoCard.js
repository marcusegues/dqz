import { StyleSheet, Platform } from 'react-native';
import { verticalScale, moderateScale } from '../../../../../styles/Scaling';

export default StyleSheet.create({
  contentContainer: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 2,
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  mainTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    lineHeight: verticalScale(39),
    color: '#141414',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  leftTouchable: {
    flex: 0.5,
    backgroundColor: '#DC0018',
    borderRadius: 3,
  },
  leftButtonText: {
    fontSize: moderateScale(14),
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'roboto_medium',
    fontWeight: '500',
    paddingVertical: verticalScale(16),
  },
  rightTouchable: {
    flex: 0.5,
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  rightButtonText: {
    fontSize: moderateScale(18),
    color: '#0A5287',
    alignSelf: 'center',
    fontFamily: 'roboto_medium',
    fontWeight: '500',
    paddingVertical: 20,
  },
});
