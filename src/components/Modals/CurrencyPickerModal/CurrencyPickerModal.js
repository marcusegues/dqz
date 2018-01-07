// @flow
import React from 'react';
// $FlowFixMe
import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Picker,
  // $FlowFixMe
} from 'react-native';

import { translate } from 'react-i18next';
import AppModal from '../AppModal';
import RedButton from '../../Buttons/RedButton';
import ownStyles from '../styles/PickerModal';
import PickerCard from './subComponents/PickerCard';
import PickerComponent from './subComponents/PickerComponent';
import { CardHeader } from '../../QuestionAnswer/cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { currencyPicker } from './currencyPickerData';
import styles from '../styles/CurrencyPickerModal';
import { INDIVIDUALALLOWANCE } from '../../../model/constants';
import { currenciesArray } from '../../../model/currencies';
import type { Currency, CurrencyObject } from '../../../model/currencies';

type PickerState = {
  currency: Currency,
  amount: number,
};

type CurrencyPickerProps = {
  t: any, // TODO
  onHide: () => void,
  currencyObject: CurrencyObject,
  currencyDate: string,
  modalVisible: boolean,
  onAddAmount: (currency: Currency, amount: number) => void,
  large: boolean,
};

class CurrencyPickerModal extends React.Component<
  CurrencyPickerProps,
  PickerState
> {
  constructor() {
    super();
    this.state = {
      amount: 0,
      currency: 'EUR',
    };
  }

  confirmPicker() {
    const { currency, amount } = this.state;
    const { onAddAmount, onHide } = this.props;
    onAddAmount(currency, amount);
    onHide();
  }

  render() {
    const { t, currencyObject, currencyDate, modalVisible, large } = this.props;
    const { amount, currency } = this.state;

    const disabledRedButton: boolean =
      typeof amount !== 'number' || amount <= 0;

    let redButtonText: string = t(['confirmPicker'], {
      value: `${currency} ${amount.toFixed(2)}`,
    });
    if (disabledRedButton) {
      redButtonText = t(['currencyPickerInvalidInput']);
    }
    const subButtonText: string = `CHF ${
      disabledRedButton ? '--' : (amount * currencyObject[currency]).toFixed(2)
    } (${t(['currencyPickerRate'])} ${currencyDate})`;

    let title: string = t(['currencyPickerTitle']);
    if (large) {
      title = t(['currencyPickerLargeAmountTitle'], {
        value: INDIVIDUALALLOWANCE,
      });
    }
    return (
      <AppModal modalVisible={modalVisible}>
        <PickerCard style={{ top: '10%' }}>
          <CardHeader text={title} />
          <CardHeaderSubText text={t(['currencyPickerSubTitle'])} />

          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={ownStyles.pickerContainer}>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                onChangeText={value => this.setState({ amount: +value })}
                maxLenght="8"
                underlineColorAndroid="transparent"
                blurOnSubmit
              />

              <PickerComponent
                selectedValue={currency}
                onValueChange={itemValue =>
                  this.setState({
                    currency: itemValue,
                  })
                }
                prompt=""
                itemStyle={{
                  fontFamily: 'roboto_medium',
                }}
                style={{ flex: 0.5 }}
              >
                {currencyPicker
                  .filter(c => currenciesArray.indexOf(c.value) > -1)
                  .sort(
                    (a, b) =>
                      currenciesArray.indexOf(a.value) -
                      currenciesArray.indexOf(b.value)
                  )
                  .map(i => (
                    <Picker.Item
                      key={i.label}
                      label={i.label}
                      value={i.value}
                    />
                  ))}
              </PickerComponent>
            </View>
          </TouchableWithoutFeedback>

          <View style={ownStyles.redButtonWrapper}>
            <RedButton
              confirmationDisabled={disabledRedButton}
              onPress={() => {
                Keyboard.dismiss();
                this.confirmPicker();
              }}
              text={redButtonText}
            />
          </View>

          <CardHeaderSubText
            style={{
              marginTop: 10,
              textAlign: 'center',
            }}
            text={subButtonText}
          />
        </PickerCard>
      </AppModal>
    );
  }
}

export default translate(['modal'])(CurrencyPickerModal);
