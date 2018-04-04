// @flow

// $FlowFixMe
import { StyleSheet } from 'react-native';
import { BLACK, CARD_GREY } from './colors';
import { size } from './fonts';

type GlobalStyles = { boxShadow: {}, collapsedCardText: {} };

export const globalStyles: GlobalStyles = StyleSheet.create({
  boxShadow: {
    elevation: 2,
    shadowColor: BLACK,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  collapsedCardText: {
    fontSize: size.small,
    color: CARD_GREY,
  },
});
