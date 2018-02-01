// @flow
// $FlowFixMe
import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';
import { WHITE } from '../../../styles/colors';

export const menuTileStyle: any = StyleSheet.create({
  container: {
    width: scale(152),
    height: scale(135),
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 4,
    marginBottom: 16,
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
  },
});
