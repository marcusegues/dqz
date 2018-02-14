// @flow
// $FlowFixMe
import { StyleSheet } from 'react-native';
import { moderateScale, scale } from '../../../styles/Scaling';

export const pickerModalStyle = StyleSheet.create({
  topTouchableContainer: {
    flexDirection: 'row',
  },
  redButtonWrapper: {
    marginHorizontal: scale(8),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderColor: '#A0A0A0',
    width: 110,
    borderBottomWidth: 1,
    borderBottomColor: '#9B9B9B',
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    color: '#1a1a1a',
  },
});
