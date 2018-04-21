// @flow
// $FlowFixMe
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

const { width } = Dimensions.get('window');

export const mainMenuStyles: any = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    ...Platform.select({
      ios: {
        flex: Platform.isPad ? 0.7 : 0.42,
      },
      android: {
        flex: 1,
      },
    }),

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width,
    ...Platform.select({
      ios: {
        height: Platform.isPad ? '100%' : moderateScale(227),
      },
      android: {
        height: moderateScale(210, 0.9),
      },
    }),
  },
  logoAndTitleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyLogo: {
    height: moderateScale(40),
  },
  bottomContainer: {
    ...Platform.select({
      ios: {
        flex: Platform.isPad ? 0.8 : 0.58,
      },
      android: {
        flex: 1.3,
      },
    }),
    marginHorizontal: moderateScale(16),
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignContent: 'space-between',
  },
});
