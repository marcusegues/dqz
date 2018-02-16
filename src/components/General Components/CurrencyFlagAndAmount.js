// @flow
import React from 'react';
// $FlowFixMe
import { View, StyleSheet } from 'react-native';
import { CardRowText } from '../QuestionAnswer/Cards/subcomponents/CardRowText';
import { scale } from '../../styles/Scaling';
import type { Currency } from '../../model/currencies';
import { CurrencyFlag } from './CurrencyFlag';

const ownStyles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type CurrencyFlagAndAmountProps = {
  currency: Currency,
  amount: number,
};

export const CurrencyFlagAndAmount = ({
  currency,
  amount,
}: CurrencyFlagAndAmountProps) => (
  <View style={ownStyles.content}>
    <View style={{ marginRight: scale(5) }}>
      <CurrencyFlag currency={currency} />
    </View>
    <CardRowText text={`${currency} ${amount}`} />
  </View>
);
