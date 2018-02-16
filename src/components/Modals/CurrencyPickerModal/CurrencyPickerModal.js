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
import { PickerCard } from './subComponents/PickerCard';
import { PickerComponent } from './subComponents/PickerComponent';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { currencyPicker } from './currencyPickerData';
import { currencyPickerModal } from '../styles/CurrencyPickerModal';
import { INDIVIDUALALLOWANCE } from '../../../model/constants';
import { currenciesArray } from '../../../model/currencies';
import type { Currency, CurrencyObject } from '../../../model/currencies';
import type { TFunction } from '../../../types/generalTypes';
import type { Amounts } from '../../../model/types/basketPeopleAmountsTypes';
import { hasOffsettingAmount } from '../../../model/utils';
import { ModalCloseText } from '../ModalCloseText';

type PickerState = {
  currency: Currency,
  amount: number,
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
    };
  }

  confirmPicker() {
    const { currency, amount } = this.state;
    const { onAddAmount, onHide } = this.props;
    onAddAmount(currency, amount);
    this.setState({ amount: 0 });
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

    let disabledRedButton: boolean = typeof amount !== 'number' || amount <= 0;

    let redButtonText: string = t(['confirmPicker'], {
      value: `${currency} ${amount.toFixed(2)}`,
    });
    if (disabledRedButton) {
      redButtonText = t(['currencyPickerInvalidInput']);
    }

    if (large && currencyObject[currency] * amount < INDIVIDUALALLOWANCE) {
      disabledRedButton = true;
      redButtonText = t(['currencyPickerTooSmallLargeAmount']);
    }

    if (large && !hasOffsettingAmount(amounts, amount, currency)) {
      disabledRedButton = true;
      redButtonText = t(['currencyPickerNoOffsettingInput']);
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
        <PickerCard style={{ width: '100%' }}>
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
                onChangeText={value => this.setState({ amount: +value })}
                maxLenght="8"
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
        </PickerCard>
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
