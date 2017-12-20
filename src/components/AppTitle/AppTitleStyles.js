import { StyleSheet } from 'react-native';
import { moderateScale, scale } from '../../styles/Scaling';

export default StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  appTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appTitleWe: {
    color: '#1A1A1A',
    fontFamily: 'roboto_bold',
    fontSize: moderateScale(47),
  },
  appTitleDeclare: {
    fontFamily: 'roboto_light',
    fontSize: moderateScale(47),
  },
  logo: {
    width: scale(42),
    height: null,
  },
});
