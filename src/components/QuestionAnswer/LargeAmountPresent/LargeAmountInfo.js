import React from 'react';
import { View, Text } from 'react-native';

const LargeAmountInfo = ({ largeAmountPresent }) => (
  <View>
    {largeAmountPresent === 'notAnswered' ? (
      <Text>Large Amount Question</Text>
    ) : (
      <Text>{`${
        largeAmountPresent ? 'Ja' : 'Nein'
      } Große Menge vorhanden`}</Text>
    )}
  </View>
);

export default LargeAmountInfo;
