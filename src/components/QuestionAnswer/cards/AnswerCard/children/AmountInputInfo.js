import React from 'react';
import { translate } from 'react-i18next';
import { View, Text } from 'react-native';

const AmountInputInfo = ({ vat, t }) => (
  <View>
    <Text>{`${t(`customsVat`)}:`}</Text>
    <Text>{`CHF ${vat.toFixed(2)} <<TODO: not clear what to put here>>`}</Text>
  </View>
);

export default translate(['general'])(AmountInputInfo);
