// @flow
// $FlowFixMe
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';
import { WHITE } from '../../../styles/colors';

const { width } = Dimensions.get('window');

export const menuTileStyle: any = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: moderateScale(135),
      },
      android: {
        height: moderateScale(120, 0.9),
      },
    }),
    width: width / 2 - moderateScale(24),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 4,
    marginBottom: moderateScale(16),
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(17),
    color: '#1a1a1a',
    fontFamily: 'roboto_medium',
    textAlign: 'center',
    marginTop: verticalScale(10),
    paddingHorizontal: scale(10),
    paddingBottom: verticalScale(5),
  },
});
