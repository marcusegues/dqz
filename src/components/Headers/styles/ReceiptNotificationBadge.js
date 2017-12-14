import { StyleSheet } from 'react-native';
import { moderateScale, scale } from '../../../styles/Scaling';
import { MAIN_RED } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    minWidth: scale(105),
    maxWidth: scale(180),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_RED,
    marginRight: scale(10),
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 20,
  },
  amountText: {
    marginHorizontal: 10,
    color: 'white',
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(14),
  },
  receiptIcon: {
    marginLeft: 5,
  },
});
