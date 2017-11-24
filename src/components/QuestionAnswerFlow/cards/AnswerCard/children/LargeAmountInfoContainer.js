import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getLargeAmountPresent } from '../../../../../reducers';

class LargeAmountInfoContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>{`${
          this.props.largeAmountPresent ? 'Yes' : 'Not'
        } large amount present`}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  largeAmountPresent: getLargeAmountPresent(state),
});

export default connect(mapStateToProps, null)(LargeAmountInfoContainer);
