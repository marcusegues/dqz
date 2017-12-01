import React from 'react';
import { View, Text } from 'react-native';

const LargeAmountInfo = ({ largeAmountPresent }) => (
  <View>
    {largeAmountPresent === null ? (
      <Text>Please answer</Text>
    ) : (
      <Text>{`${
        largeAmountPresent ? 'Yes' : 'Not'
      } large amount present`}</Text>
    )}
  </View>
);

export default LargeAmountInfo;
