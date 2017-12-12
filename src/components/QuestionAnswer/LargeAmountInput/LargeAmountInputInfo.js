import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';

class LargeAmountInputInfo extends React.Component {
  constructor(props) {
    super(props);
    this.getText = this.getText.bind(this);
  }

  getText() {
    const { t } = this.props;
    return this.props.largeAmountsEntered === 'notAnswered'
      ? t('largeAmountInput:pleaseInput')
      : t('largeAmountInput:totalLargeAmount', {
          value: this.props.largeAmounts.reduce((acc, val) => acc + val, 0),
        });
  }

  render() {
    return (
      <View>
        <Text>{this.getText()}</Text>
      </View>
    );
  }
}

export default translate(['general', 'largeAmountInput'])(LargeAmountInputInfo);
