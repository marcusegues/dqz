// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import type { Currency } from '../../model/currencies';
import { currencyPicker } from '../Modals/CurrencyPickerModal/currencyPickerData';

type CurrencyFlagProps = {
  currency: Currency,
  fontSize?: number,
};

export const CurrencyFlag = ({ currency, fontSize }: CurrencyFlagProps) => {
  const flag = currencyPicker[currency];
  return <Text style={{ fontSize }}>{flag}</Text>;
};

CurrencyFlag.defaultProps = {
  fontSize: 30,
};
