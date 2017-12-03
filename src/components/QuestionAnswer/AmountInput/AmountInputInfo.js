import React from 'react';
import { View, Text } from 'react-native';

class AmountInputInfo extends React.Component {
  constructor(props) {
    super(props);
    this.getText = this.getText.bind(this);
  }

  getText() {
    return this.props.amountsEntered === 'notAnswered'
      ? 'Bitte geben Sie die Menge ein'
      : `Insgesamt Mengen sind ${this.props.amounts.reduce(
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

export default AmountInputInfo;
