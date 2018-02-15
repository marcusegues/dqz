// @flow
import React from 'react';
// $FlowFixMe
import { View, StyleSheet, Text } from 'react-native';
import { CardRowText } from '../QuestionAnswer/cards/subcomponents/CardRowText';
import { scale } from '../../styles/Scaling';
import type { Currency } from '../../model/currencies';

const ownStyles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  flag: {
    marginRight: scale(5),
  },
});

type FlagAndCurrencyAmountProps = {
  currency: Currency,
  amount: number,
  flag: Array<string>,
};

export const FlagAndCurrencyAmount = ({
  currency,
  amount,
  flag,
}: FlagAndCurrencyAmountProps) => (
  <View style={ownStyles.content}>
    <Text style={ownStyles.flag}>{flag}</Text>
    <CardRowText text={`${currency} ${amount}`} />
  </View>
);
