// @flow
// $FlowFixMe
import { Platform, StyleSheet } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';
import { MAIN_RED, WHITE } from '../../../styles/colors';

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

    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: moderateScale(208),
    height: moderateScale(133),
    resizeMode: 'cover',
  },
  logoAndTitleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyLogo: {
    height: moderateScale(51),
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
  redBadge: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    backgroundColor: MAIN_RED,
    borderRadius: 100,
    position: 'absolute',
    top: -10,
    right: -7,
  },
  redBadgeText: {
    color: WHITE,
    fontSize: moderateScale(14),
    fontFamily: 'roboto_regular',
  },
});
