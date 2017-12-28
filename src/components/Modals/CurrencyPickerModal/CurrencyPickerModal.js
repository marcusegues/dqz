// @flow
import React from 'react';
// $FlowFixMe
import { View, Picker, TextInput } from 'react-native';
import { translate } from 'react-i18next';
import AppModal from '../AppModal';
import RedButton from '../../Buttons/RedButton';
import ownStyles from '../styles/PickerModal';
import PickerCard from './subComponents/PickerCard';
import PickerComponent from './subComponents/PickerComponent';
import CardHeader from '../../QuestionAnswer/cards/subcomponents/CardHeader';
import CardHeaderSubText from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { currencyPicker } from './currencyPickerData';
import styles from '../styles/CurrencyPickerModal';

type PickerState = {
  currency: string,
  amount: number,
};

class CurrencyPickerModal extends React.Component<any, PickerState> {
  state = {
    amount: '',
    currency: 'EUR',
  };

  render() {
    const { t } = this.props;
    const { amount, currency } = this.state;
    return (
      <AppModal
        onRequestClose={this.props.onRequestClose}
        modalVisible={this.props.modalVisible}
      >
        <PickerCard style={{ top: '16%' }}>
          <CardHeader text="Gegenstand mit mehr als 300.00 CHF erfassen" />
          <CardHeaderSubText text="Erfassen Sie den Nettowert des Gegenstands in seiner Original-Währung: " />

          <View style={[ownStyles.pickerContainer, {}]}>
            <TextInput
              style={styles.textInput}
              onChangeText={value => this.setState({ amount: value })}
              value={this.state.amount}
              autoFocus
              numeric
            />

            <PickerComponent
              selectedValue={this.state.currency}
              onValueChange={itemValue =>
                this.setState({
                  currency: itemValue,
                })
              }
              prompt="Choose value"
              itemStyle={{
                fontFamily: 'roboto_medium',
              }}
              style={{ flex: 0.5 }}
            >
              {currencyPicker.map(i => (
                <Picker.Item key={i.label} label={i.label} value={i.value} />
              ))}
            </PickerComponent>
          </View>

          <View style={[ownStyles.redButtonWrapper, {}]}>
            <RedButton
              onPress={() => {}}
              text={t(['confirmPicker'], {
                value: `${+amount} ${currency}`,
              })}
            />
          </View>
          <CardHeaderSubText
            style={{ marginTop: 10, textAlign: 'center' }}
            text="102.13 CHF (Kurs vom 11.12.2017)"
          />
        </PickerCard>
      </AppModal>
    );
  }
}

export default translate(['modal'])(CurrencyPickerModal);
