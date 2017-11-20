import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
} from '../../../../styles/Scaling';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
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
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: 'roboto_light',
    fontSize: moderateScale(36),
    fontWeight: '300',
    color: '#1A1A1A',
    // fontSize: 36,
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
        elevation: 20,
      },
    }),
  },
  leftTouchable: {
    flex: 0.5,
    backgroundColor: '#006699',
  },
  leftButtonText: {
    fontSize: moderateScale(18),
    // fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'roboto_medium',
    fontWeight: '500',
    paddingVertical: 20,
  },
  rightTouchable: {
    flex: 0.5,
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  rightButtonText: {
    fontSize: moderateScale(18),
    // fontSize: 18,
    color: '#0A5287',
    alignSelf: 'center',
    fontFamily: 'roboto_medium',
    fontWeight: '500',
    paddingVertical: 20,
  },
});
