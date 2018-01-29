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
import { CardHeader } from '../../QuestionAnswer/cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/cards/subcomponents/CardHeaderSubText';
import { currencyPicker } from '../CurrencyPickerModal/currencyPickerData';
import { currencyPickerModal } from '../styles/CurrencyPickerModal';
import { INDIVIDUALALLOWANCE } from '../../../model/constants';
import { currenciesArray } from '../../../model/currencies';
import type { Currency, CurrencyObject } from '../../../model/currencies';
import type { TFunction } from '../../../types/generalTypes';
import type { Amounts } from '../../../model/types/basketPeopleAmountsTypes';
import { hasOffsettingAmount } from '../../../model/utils';
import { PickerCard } from '../CurrencyPickerModal/subComponents/PickerCard';
import { PickerComponent } from '../CurrencyPickerModal/subComponents/PickerComponent';
import { moderateScale, verticalScale } from '../../../styles/Scaling';
import {
  pickerHours,
  rangeItemsPicker,
  pickerMinutes,
} from '../PickerModal/pickerData';
import { PickerValueSeparator } from '../CurrencyPickerModal/subComponents/PickerValueSeparator';

type PickerState = {
  currency: Currency,
  amount: number,
  hours: number,
  minutes: number,
};

type TimePickerModalProps = {
  onHide: () => void,
  currencyObject: CurrencyObject,
  currencyDate: string,
  modalVisible: boolean,
  onAddAmount: (currency: Currency, amount: number) => void,
  // large: boolean,
  // amounts: Amounts,
};

class TimePickerModalInner extends React.Component<
  TimePickerModalProps & { t: TFunction },
  PickerState
> {
  constructor() {
    super();
    this.state = {
      hours: '00',
      minutes: '00',
    };
  }

  confirmPicker() {
    const { currency, amount } = this.state;
    const { onAddAmount, onHide } = this.props;
    onAddAmount(currency, amount);
    onHide();
  }

  render() {
    const { t, currencyObject, currencyDate, modalVisible } = this.props;
    const { hours, minutes } = this.state;

    return (
      <AppModal modalVisible={modalVisible}>
        <PickerCard style={{ width: '95%' }}>
          <CardHeader text={t('timePickerTitle')} />
          <CardHeaderSubText text={t(['timePickerSubTitle'])} />

          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={pickerModalStyle.pickerContainer}>
              <PickerComponent
                selectedValue={hours}
                onValueChange={itemValue =>
                  this.setState({
                    hours: itemValue,
                  })
                }
                mode="dropdown"
                prompt=""
                itemStyle={{}}
              >
                {pickerHours.map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator=":" />

              <PickerComponent
                selectedValue={minutes}
                onValueChange={itemValue =>
                  this.setState({
                    minutes: itemValue,
                  })
                }
                mode="dropdown"
                prompt=""
                itemStyle={{}}
              >
                {pickerMinutes.map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator="Uhr" />
            </View>
          </TouchableWithoutFeedback>

          <CardHeaderSubText
            style={{
              marginTop: verticalScale(10),
              textAlign: 'center',
              fontSize: moderateScale(12),
            }}
            text={t('timePickerRegistrationValidUntil', {
              date: '24.01.2018',
              time: '18:30',
            })}
          />

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              // confirmationDisabled={disabledRedButton}
              onPress={() => {
                Keyboard.dismiss();
                // this.confirmPicker();
              }}
              text={t('timePickerTakeOverThePeriod')}
            />
          </View>
        </PickerCard>
      </AppModal>
    );
  }
}

export const TimePickerModal = (translate(['modal'])(
  TimePickerModalInner
): ComponentType<TimePickerModalProps>);
