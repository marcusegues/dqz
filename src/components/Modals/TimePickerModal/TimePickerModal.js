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
import { formatDate, formatFullDate } from '../../../model/utils';
import { ConfirmationCard } from '../../QuestionAnswer/cards/ConfirmationCard/ConfirmationCard';

const ownStyles = {
  container: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  validUntilText: {
    marginTop: verticalScale(10),
    textAlign: 'center',
    fontSize: moderateScale(12),
  },
};

type PickerState = {
  date: string,
  hours: string,
  minutes: string,
};

type TimePickerModalProps = {
  modalVisible: boolean,
  onHideModal: () => void,
  onSelectTime: (selectedFullDate: string) => void,
};

const now = new Date();

class TimePickerModalInner extends React.Component<
  TimePickerModalProps & { t: TFunction },
  PickerState
> {
  static defaultProps = {
    onSelectTime: () => {},
    onHideModal: () => {},
  };

  constructor() {
    super();
    this.state = {
      date: `${formatDate(now)}`,
      hours: '00',
      minutes: '00',
    };
  }

  render() {
    const { t, modalVisible, onHideModal } = this.props;
    const { date, hours, minutes } = this.state;
    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <PickerCard
          style={{
            width: '100%',
          }}
        >
          <CardHeader text={t('timePickerTitle')} />
          <CardHeaderSubText text={t(['timePickerSubTitle'])} />

          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View
              style={[pickerModalStyle.pickerContainer, ownStyles.container]}
            >
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
                style={{ flex: 0.5 }}
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
                itemStyle={{ textAlign: 'right' }}
                style={{ flex: 0.15 }}
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
                style={{ flex: 0.15 }}
              >
                {pickerMinutes.map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator={t('timePickerTimePrefix')} />
            </View>
          </TouchableWithoutFeedback>

          <CardHeaderSubText
            style={ownStyles.validUntilText}
            text={t(['timePickerRegistrationValidUntil'], {
              date: `${date}`,
              time: `${hours}:${minutes}`,
            })}
          />

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              onPress={() => {
                this.props.onSelectTime(
                  formatFullDate(
                    this.state.date,
                    this.state.hours,
                    this.state.minutes
                  )
                );
                this.props.onHideModal();
              }}
              text={t('timePickerTakeOverThePeriod')}
            />
          </View>
        </PickerCard>
        <ModalCloseText onModalHide={onHideModal} text={t('closeModalText')} />
      </AppModal>
    );
  }
}

export const TimePickerModal = (translate(['modal'])(
  TimePickerModalInner
): ComponentType<TimePickerModalProps>);
