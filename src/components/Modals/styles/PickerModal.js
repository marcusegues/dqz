import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import {
  GREY,
  BLACK,
  WHITE,
  MAIN_RED,
  DARK_GREY,
} from '../../../styles/colors';

const touchableStyles = {
  alignItems: 'center',
  paddingVertical: 15,
};

const touchableTextStyles = {
  fontFamily: 'roboto_regular',
  fontSize: moderateScale(14),
};

export default StyleSheet.create({
  modalContainer: {
    top: '25%',
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: verticalScale(16),
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: WHITE,
  },
  topTouchableContainer: {
    flexDirection: 'row',
  },
  topTouchable: {
    flex: 0.5,
  },
  redButtonWrapper: {
    marginHorizontal: scale(8),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  touchableActive: {
    ...touchableStyles,
    backgroundColor: WHITE,
    borderTopWidth: 3,
    borderTopColor: MAIN_RED,
  },
  touchableInactive: {
    ...touchableStyles,
    backgroundColor: GREY,
    borderTopWidth: 3,
    borderTopColor: GREY,
  },
  touchableActiveText: {
    ...touchableTextStyles,
    color: BLACK,
  },
  touchableInactiveText: {
    ...touchableTextStyles,
    color: WHITE,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pickerNumberColumn: {
    flex: 0.25,
  },
  pickerDividerColumn: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pickerDividerColumnText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(16),
    color: DARK_GREY,
  },
  pickerLiterColumn: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  pickerLiterColumnText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(14),
    color: DARK_GREY,
  },
});
