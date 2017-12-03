import React from 'react';
import { View, Text } from 'react-native';

class OverAllowanceInfo extends React.Component {
  getText() {
    switch (this.props.overAllowance) {
      case 'notAnswered': {
        return 'Freigabe-Frage';
      }
      case true: {
        return 'Ja, über der Warenfreigabegrenze.';
      }
      case false: {
        return 'Nicht über der Warenfreigabegrenze.';
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
