// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import {
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
import type { TFunction } from '../../../types/generalTypes';
import { PickerCard } from '../CurrencyPickerModal/subComponents/PickerCard';
import { PickerComponent } from '../CurrencyPickerModal/subComponents/PickerComponent';
import { moderateScale, verticalScale } from '../../../styles/Scaling';
import {
  pickerHours,
  pickerMinutes,
  pickerDates,
} from '../PickerModal/pickerData';
import { PickerValueSeparator } from '../CurrencyPickerModal/subComponents/PickerValueSeparator';
import { ModalCloseText } from '../ModalCloseText';

type PickerState = {
  date: string,
  hours: string,
  minutes: string,
};

type TimePickerModalProps = {
  // onHide: () => void,
  modalVisible: boolean,
  toggleModalVisible: () => void,
  // onAddAmount: (currency: Currency, amount: number) => void,
};

class TimePickerModalInner extends React.Component<
  TimePickerModalProps & { t: TFunction },
  PickerState
> {
  constructor() {
    super();
    this.state = {
      date: '',
      hours: '00',
      minutes: '00',
    };
  }

  // confirmPicker() {
  //   const { currency, amount } = this.state;
  //   const { onAddAmount, onHide } = this.props;
  //   onAddAmount(currency, amount);
  //   onHide();
  // }

  render() {
    const { t, modalVisible, toggleModalVisible } = this.props;
    const { date, hours, minutes } = this.state;

    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="bounceInLeft"
        animationOut="bounceOutLeft"
      >
        <PickerCard style={{ width: '95%' }}>
          <CardHeader text={t('timePickerTitle')} />
          <CardHeaderSubText text={t(['timePickerSubTitle'])} />

          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={[pickerModalStyle.pickerContainer, { width: '100%' }]}>
              <PickerComponent
                selectedValue={date}
                onValueChange={itemValue =>
                  this.setState({
                    date: itemValue,
                  })
                }
                mode="dropdown"
                prompt=""
                itemStyle={{}}
                style={{ flex: 0.4 }}
              >
                {pickerDates.map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

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

              <PickerValueSeparator separator={t('timePickerTimePrefix')} />
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
        <ModalCloseText
          onModalHide={toggleModalVisible}
          text={t('closeModalText')}
        />
      </AppModal>
    );
  }
}

export const TimePickerModal = (translate(['modal'])(
  TimePickerModalInner
): ComponentType<TimePickerModalProps>);
