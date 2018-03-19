// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { DateTime } from 'luxon';
// $FlowFixMe
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Picker,
  Platform,
  // $FlowFixMe
} from 'react-native';

import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { pickerModalStyle } from '../styles/PickerModal';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import type { TFunction } from '../../../types/generalTypes';
import { ModalCard } from '../ModalCard';
import { PickerComponent } from '../../Pickers/PickerComponent';
import { moderateScale, verticalScale } from '../../../styles/Scaling';
import {
  pickerHours,
  pickerMinutes,
  pickerDates,
} from '../QuantityInputModal/pickerData';
import { PickerValueSeparator } from '../CurrencyPickerModal/subComponents/PickerValueSeparator';
import { ModalCloseText } from '../ModalCloseText';
import { roundMinutes } from '../../../model/utils';
import { dateTimeToFormat } from '../../../utils/datetime/datetime';

const ownStyles = {
  container: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
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
  currentEntryTime: DateTime,
};

class TimePickerModalInner extends React.Component<
  TimePickerModalProps & { t: TFunction, i18n: { language: string } },
  PickerState
> {
  static defaultProps = {
    onSelectTime: () => {},
    onHideModal: () => {},
  };

  constructor(props) {
    const { currentEntryTime } = props;
    super();
    this.state = {
      date: currentEntryTime.toFormat('dd.MM.y'),
      hours: currentEntryTime.toFormat('HH'),
      minutes: currentEntryTime.toFormat('mm'),
    };
  }

  render() {
    const { t, i18n, modalVisible, onHideModal, onSelectTime } = this.props;
    const { language } = i18n;
    const { date, hours, minutes } = this.state;
    const entryTime = DateTime.fromFormat(
      `${date} ${hours}:${minutes}`,
      'dd.MM.y HH:mm'
    );
    const entryTimePlus = entryTime.plus({ hours: 2 });
    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <ModalCard
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
                style={{
                  flex: Platform.OS === 'ios' ? 0.4 : 0.45,

                  paddingVertical: 10,
                }}
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
                style={{
                  flex: Platform.OS === 'ios' ? 0.15 : 0.25,
                  paddingVertical: 10,
                }}
              >
                {pickerHours.map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator=":" />

              <PickerComponent
                selectedValue={roundMinutes(parseInt(minutes, 10))}
                onValueChange={itemValue =>
                  this.setState({
                    minutes: itemValue,
                  })
                }
                mode="dropdown"
                prompt=""
                itemStyle={{}}
                style={{
                  flex: Platform.OS === 'ios' ? 0.15 : 0.25,
                  paddingVertical: 10,
                }}
              >
                {pickerMinutes.map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator={t('timePickerTimePrefix')} />
            </View>
          </TouchableWithoutFeedback>

          {entryTime.day === entryTimePlus.day ? (
            <CardHeaderSubText
              style={ownStyles.validUntilText}
              text={t(['timePickerRegistrationValidUntilSameDay'], {
                date: dateTimeToFormat(entryTime, {
                  locale: language,
                  format: 'date',
                }),
                startTime: dateTimeToFormat(entryTime, {
                  locale: language,
                  format: 'time',
                }),
                endTime: dateTimeToFormat(entryTimePlus, {
                  locale: language,
                  format: 'time',
                }),
              })}
            />
          ) : (
            <CardHeaderSubText
              style={ownStyles.validUntilText}
              text={t(['timePickerRegistrationValidUntilDifferentDay'], {
                startDate: dateTimeToFormat(entryTime, {
                  locale: language,
                  format: 'date',
                }),
                startTime: dateTimeToFormat(entryTime, {
                  locale: language,
                  format: 'time',
                }),
                endDate: dateTimeToFormat(entryTimePlus, {
                  locale: language,
                  format: 'date',
                }),
                endTime: dateTimeToFormat(entryTimePlus, {
                  locale: language,
                  format: 'time',
                }),
              })}
            />
          )}

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              onPress={() => {
                onSelectTime(
                  DateTime.fromFormat(
                    `${date} ${hours}:${minutes}`,
                    'dd.MM.y HH:mm'
                  ).toString()
                );
                onHideModal();
              }}
              text={t('timePickerTakeOverThePeriod')}
            />
          </View>
        </ModalCard>
        <ModalCloseText onModalHide={onHideModal} text={t('closeModalText')} />
      </AppModal>
    );
  }
}

export const TimePickerModal = (translate(['modal'])(
  TimePickerModalInner
): ComponentType<TimePickerModalProps>);
