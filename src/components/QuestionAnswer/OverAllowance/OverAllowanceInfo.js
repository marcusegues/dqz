import React from 'react';
import { View, Text } from 'react-native';

const OverAllowanceInfo = ({ overAllowance }) => (
  <View>
    <Text>{`${overAllowance ? 'Ja' : 'Nein'} über Zulage`}</Text>
  </View>
);

export default OverAllowanceInfo;
