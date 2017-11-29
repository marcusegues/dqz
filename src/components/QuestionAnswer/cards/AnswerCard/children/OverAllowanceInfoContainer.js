import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getOverAllowance } from '../../../../../reducers';

const OverAllowanceInfoContainer = ({ overAllowance }) => (
  <View>
    <Text>{`${overAllowance ? 'Yes' : 'Not'} over allowance`}</Text>
  </View>
);

const mapStateToProps = state => ({
  overAllowance: getOverAllowance(state),
});

export default connect(mapStateToProps, null)(OverAllowanceInfoContainer);
