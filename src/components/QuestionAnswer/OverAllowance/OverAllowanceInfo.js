import React from 'react';
import { View, Text } from 'react-native';

class OverAllowanceInfo extends React.Component {
  getText() {
    switch (this.props.overAllowance) {
      case 'notAnswered': {
        return 'Over Allowance Question.';
      }
      case true: {
        return 'Yes over allowance.';
      }
      case false: {
        return 'Not over allowance';
      }
      default: {
        return null;
      }
    }
  }

  render() {
    return (
      <View>
        <Text>{this.getText()}</Text>
      </View>
    );
  }
}

export default OverAllowanceInfo;
