// @flow
import React from 'react';
// $FlowFixMe
import { View, Picker, TextInput, StyleSheet } from 'react-native';
import { translate } from 'react-i18next';
import AppModal from '../AppModal';
import RedButton from '../../Buttons/RedButton';
import ownStyles from '../styles/PickerModal';
import { CategoriesInfo } from '../../../model/constants';
import PickerCard from './subComponents/PickerCard';
import PickerComponent from './subComponents/PickerComponent';
import PickerUnits from './subComponents/PickerUnits';
import CardHeader from '../../QuestionAnswer/cards/subcomponents/CardHeader';
import CardHeaderSubText from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { currencyPicker } from './currencyPickerData';
import { moderateScale } from '../../../styles/Scaling';

type PickerState = {
  selected: 'standardInput' | 'customInput',
  standardInput: {
    number: string,
    amount: string,
  },
  customInput: {
    units: string,
    decimalUnits: string,
  },
  currency: string,
  amount: number,
};

class CurrencyPickerModal extends React.Component<any, PickerState> {
  state = {
    selected: 'standardInput' || 'customInput',
    standardInput: {
      number: '1',
      amount: '1',
    },
    customInput: {
      units: '1',
      decimalUnits: '00',
    },
    amount: '',
    currency: 'EUR',
  };

  standardTotalAmount(): number {
    const {
      number: numberString,
      amount: amountString,
    } = this.state.standardInput;

    const number = +numberString;
    const amount = +amountString;
    if (number < 0 || amount < 0) {
      return 0;
    }
    return number * amount;
  }

  customTotalAmount(): number {
    const {
      units: unitsString,
      decimalUnits: decimalUnitsString,
    } = this.state.customInput;

    const units = +unitsString;
    const decimalUnits = +decimalUnitsString;
    if (units < 0 || decimalUnits < 0) {
      return 0;
    }
    return units + decimalUnits / 100;
  }

  render() {
    const { selected } = this.state;
    const { t, confirmAction, category } = this.props;
    const standardInput = selected === 'standardInput';
    const unit = CategoriesInfo.getIn([category, 'unit'], '');

    const currentAmount: number = standardInput
      ? this.standardTotalAmount()
      : this.customTotalAmount();

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
              style={{
                height: 40,
                borderColor: '#A0A0A0',
                width: 110,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: '#9B9B9B',
                textAlign: 'center',
                marginHorizontal: 20,
                fontFamily: 'roboto_regular',
                fontSize: moderateScale(24),
                color: '#1a1a1a',
              }}
              onChangeText={amount => this.setState({ amount })}
              value={this.state.amount}
              autoFocus
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
            <PickerUnits unit={unit} />
          </View>

          <View style={[ownStyles.redButtonWrapper, {}]}>
            <RedButton
              onPress={() => confirmAction(currentAmount)}
              text={t(['confirmPicker'], {
                value: `${currentAmount.toFixed(2)} ${unit}`,
              })}
            />
          </View>
          <CardHeaderSubText
            style={{ marginTop: 10, textAlign: 'center' }}
            text={`${this.state.amount} ${
              this.state.currency
            } (Kurs vom 11.12.2017)`}
          />
        </PickerCard>
      </AppModal>
    );
  }
}

export default translate(['modal'])(CurrencyPickerModal);
