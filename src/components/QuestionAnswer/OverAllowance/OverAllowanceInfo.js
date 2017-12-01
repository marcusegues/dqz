import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getOverAllowance } from '../../..//reducers';

const OverAllowanceInfo = ({ overAllowance }) => (
  <View>
    <Text>{`${overAllowance ? 'Yes' : 'Not'} over allowance`}</Text>
  </View>
);

export default OverAllowanceInfo;
