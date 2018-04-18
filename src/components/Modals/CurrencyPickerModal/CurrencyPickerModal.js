// @flow
import React from 'react';
import type { ComponentType } from 'react';
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
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { pickerModalStyle } from '../styles/PickerModal';
import { ModalCard } from '../ModalCard';
import { PickerComponent } from '../../Pickers/PickerComponent';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { currencyPicker } from './currencyPickerData';
import { currencyPickerModal } from '../styles/CurrencyPickerModal';
import { INDIVIDUALALLOWANCE } from '../../../model/constants';
import { currenciesArray } from '../../../model/currencies';
import type { Currency, CurrencyObject } from '../../../model/currencies';
import type { TFunction } from '../../../types/generalTypes';
import type { Amounts } from '../../../model/types/basketPeopleAmountsTypes';
import { hasOffsettingAmount, checkValidAmount } from '../../../model/utils';
import { ModalCloseText } from '../ModalCloseText';
import { parseInputToFloat } from '../../../utils/inputparser/inputParser';
import { MAX_DIGITS_AMOUNT } from '../../../constants/declaration';

type PickerState = {
  currency: Currency,
  amount: number,
  inputAmountValue: string,
};

type CurrencyPickerModalProps = {
  onHide: () => void,
  currencyObject: CurrencyObject,
  currencyDate: string,
  modalVisible: boolean,
  onAddAmount: (currency: Currency, amount: number) => void,
  large: boolean,
  amounts: Amounts,
  toggleModalVisible: () => void,
};

class CurrencyPickerModalInner extends React.Component<
  CurrencyPickerModalProps & { t: TFunction },
  PickerState
> {
  constructor() {
    super();
    this.state = {
      amount: 0,
      currency: 'EUR',
      inputAmountValue: '',
    };
  }

  confirmPicker() {
    const { currency, amount } = this.state;
    const { onAddAmount, onHide } = this.props;
    onAddAmount(currency, amount);
    this.setState({ amount: 0, inputAmountValue: '' });
    onHide();
  }

  render() {
    const {
      t,
      currencyObject,
      currencyDate,
      modalVisible,
      large,
      amounts,
      toggleModalVisible,
    } = this.props;
    const { amount, currency } = this.state;

    let disabledRedButton: boolean = checkValidAmount(amount);

    let redButtonText: string = t(['confirmPicker'], {
      value: `${currency} ${amount.toFixed(2)}`,
    });
    if (disabledRedButton) {
      redButtonText = t(['modal:pickerInvalidInput']);
    }

    if (large && currencyObject[currency] * amount < INDIVIDUALALLOWANCE) {
      disabledRedButton = true;
      redButtonText = t(['currencyPickerTooSmallLargeAmount']);
    }

    // eslint-disable-next-line no-empty
    if (large && !hasOffsettingAmount(amounts, amount, currency)) {
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
      <AppModal
        modalVisible={modalVisible}
        onSwipe={toggleModalVisible}
        onRequestClose={toggleModalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <ModalCard style={{ width: '100%' }}>
          <CardHeader text={title} />
          <CardHeaderSubText text={t(['currencyPickerSubTitle'])} />

          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={pickerModalStyle.pickerContainer}>
              <PickerComponent
                selectedValue={currency}
                onValueChange={itemValue =>
                  this.setState({
                    // $FlowFixMe
                    currency: itemValue,
                  })
                }
                prompt=""
                itemStyle={{
                  fontFamily: 'roboto_medium',
                }}
                style={{ flex: 0.6 }}
              >
                {Object.keys(currencyPicker)
                  .filter(c => currenciesArray.indexOf(c) > -1)
                  .sort(
                    (a, b) =>
                      currenciesArray.indexOf(a) - currenciesArray.indexOf(b)
                  )
                  .map(c => (
                    <Picker.Item
                      key={c}
                      label={`${currencyPicker[c]} ${c}`}
                      value={c}
                    />
                  ))}
              </PickerComponent>
              <TextInput
                keyboardType="numeric"
                style={currencyPickerModal.textInput}
                onChangeText={value => {
                  const parsedValue = parseInputToFloat(
                    value,
                    MAX_DIGITS_AMOUNT - 2,
                    2
                  );
                  this.setState({
                    amount: +parsedValue,
                    inputAmountValue: parsedValue,
                  });
                }}
                value={this.state.inputAmountValue}
                maxLenght={MAX_DIGITS_AMOUNT}
                underlineColorAndroid="transparent"
                blurOnSubmit
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={pickerModalStyle.redButtonWrapper}>
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
        </ModalCard>
        <ModalCloseText
          onModalHide={toggleModalVisible}
          text={t('closeModalText')}
        />
      </AppModal>
    );
  }
}

export const CurrencyPickerModal = (translate(['modal'])(
  CurrencyPickerModalInner
): ComponentType<CurrencyPickerModalProps>);
