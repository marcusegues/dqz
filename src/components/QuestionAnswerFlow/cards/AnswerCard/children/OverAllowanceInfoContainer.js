import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getOverAllowance } from '../../../../../reducers';

class OverAllowanceInfoContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>{`${
          this.props.overAllowance ? 'Yes' : 'Not'
        } over allowance`}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  overAllowance: getOverAllowance(state),
});

export default connect(mapStateToProps, null)(OverAllowanceInfoContainer);
