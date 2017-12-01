import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getLargeAmountPresent } from '../../../reducers';

const LargeAmountInfo = ({ largeAmountPresent }) => (
  <View>
    <Text>{`${largeAmountPresent ? 'Yes' : 'Not'} large amount present`}</Text>
  </View>
);

export default LargeAmountInfo;
