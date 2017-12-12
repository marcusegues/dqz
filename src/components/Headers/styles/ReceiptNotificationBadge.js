import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';
import * as colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_RED,
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
