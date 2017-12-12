import { Platform, StyleSheet } from 'react-native';
import { moderateScale, scale } from '../../../styles/Scaling';
import { MAIN_RED } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        width: '90%',
      },
      android: {
        width: scale(57),
        marginRight: scale(5),
      },
    }),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_RED,
    paddingVertical: 4,
    borderRadius: 20,
  },
  amountText: {
    marginHorizontal: 10,
    color: 'white',
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(15),
  },
  receiptIcon: {
    marginLeft: 5,
  },
});
