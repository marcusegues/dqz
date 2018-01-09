// @flow
// $FlowFixMe
import { StyleSheet } from 'react-native';
import { scale } from '../../../styles/Scaling';

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
});
