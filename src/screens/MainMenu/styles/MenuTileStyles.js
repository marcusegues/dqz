import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';
import { BLACK, WHITE } from '../../../styles/colors';

export default StyleSheet.create({
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
    flex: 0.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(12),
    lineHeight: verticalScale(17),
    color: BLACK,
    fontFamily: 'roboto_medium',
    textAlign: 'center',
  },
});
