import React from 'react';
import { View, Text } from 'react-native';

const OverAllowanceInfo = ({ overAllowance }) => (
  <View>
    <Text>{`${overAllowance ? 'Yes' : 'Not'} over allowance`}</Text>
  </View>
);

export default OverAllowanceInfo;
