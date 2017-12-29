import React from 'react';
import { translate } from 'react-i18next';
import { View, Text } from 'react-native';

const QuantityInputInfo = ({ duty, t }) => (
  <View>
    <Text>{`${t(`customsDuty`)}:`}</Text>
    <Text>{`CHF ${duty.toFixed(2)}`}</Text>
  </View>
);

export default translate(['general'])(QuantityInputInfo);
