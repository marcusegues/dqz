// @flow
// $FlowFixMe
import { Platform, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../../styles/Scaling';

export const mainMenuStyles: any = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 16,
  },
  topContainer: {
    ...Platform.select({
      ios: {
        flex: 0.42,
      },
      android: {
        flex: 1,
      },
    }),

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: moderateScale(377),
    height: moderateScale(96),
    resizeMode: 'cover',
  },
  logoAndTitleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',

    ...Platform.select({
      ios: {
        marginTop: verticalScale(35),
      },
      android: {
        marginTop: verticalScale(10),
      },
    }),
  },
  greyLogo: {
    height: moderateScale(40),
  },
  bottomContainer: {
    ...Platform.select({
      ios: {
        flex: 0.58,
      },
      android: {
        flex: 2,
      },
    }),
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignContent: 'space-between',
  },
});
