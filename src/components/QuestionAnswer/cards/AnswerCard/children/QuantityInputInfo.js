import React from 'react';
import { translate } from 'react-i18next';
import { View, Text } from 'react-native';

const QuantityInputInfo = ({ duty, t }) => (
  <View>
    <Text>{`${t(`customsDuty`)} (CHF):`}</Text>
    <Text>{duty}</Text>
  </View>
);

export default translate(['general'])(QuantityInputInfo);
