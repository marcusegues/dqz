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
import CardHeader from '../../QuestionAnswer/cards/subcomponents/CardHeader';
import CardHeaderSubText from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { currencyPicker } from './currencyPickerData';
import styles from '../styles/CurrencyPickerModal';
import { INDIVIDUALALLOWANCE } from '../../../model/constants';
import { currenciesArray } from '../../../model/currencies';

type PickerState = {
  currency: string,
  amount: number,
};

class CurrencyPickerModal extends React.Component<any, PickerState> {
  state = {
    amount: 0,
    currency: 'EUR',
  };

  render() {
    const { t } = this.props;
    const { amount, currency } = this.state;

    const disabledRedButton: boolean =
      typeof amount !== 'number' || amount <= 0;

    let redButtonText: string = t(['confirmPicker'], {
      value: `${amount.toFixed(2)} ${currency}`,
    });
    let subButtonText: string = `102.13 CHF (${t([
      'currencyPickerRate',
    ])} 11.12.2017)`;
    if (disabledRedButton) {
      redButtonText = t(['currencyPickerInvalidInput']);
      subButtonText = t(['currencyPickerInvalidInput']);
    }
    return (
      <AppModal
        onRequestClose={this.props.onRequestClose}
        modalVisible={this.props.modalVisible}
      >
        <PickerCard style={{ top: '10%' }}>
          <CardHeader
            text={t(['currencyPickerTitle'], { value: INDIVIDUALALLOWANCE })}
          />
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
              onPress={Keyboard.dismiss}
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
