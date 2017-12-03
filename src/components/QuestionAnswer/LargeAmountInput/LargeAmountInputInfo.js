import React from 'react';
import { View, Text } from 'react-native';

class LargeAmountInputInfo extends React.Component {
  constructor(props) {
    super(props);
    this.getText = this.getText.bind(this);
  }

  getText() {
    return this.props.largeAmountsEntered === 'notAnswered'
      ? 'Bitte geben Sie die Menge ein'
      : `Insgesamt große Mengen sind ${this.props.largeAmounts.reduce(
          (acc, val) => acc + val,
          0
        )}`;
  }

  render() {
    return (
      <View>
        <Text>{this.getText()}</Text>
      </View>
    );
  }
}

export default LargeAmountInputInfo;
