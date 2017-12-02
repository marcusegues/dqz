import React from 'react';
import { View, Text } from 'react-native';

const LargeAmountInputInfo = ({ largeAmounts }) => (
  <View>
    <Text>{`Insgesamt große Mengen sind ${largeAmounts.reduce(
      (acc, val) => acc + val,
      0
    )}`}</Text>
  </View>
);

export default LargeAmountInputInfo;
