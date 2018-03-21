// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { DateTime } from 'luxon';
// $FlowFixMe
import {
  View,
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
import { moderateScale, verticalScale } from '../../../styles/Scaling';
import { ModalCloseText } from '../ModalCloseText';
import { dateTimeToFormat } from '../../../utils/datetime/datetime';
import { MAIN_RED } from '../../../styles/colors';
import { IosTimePickerLayout } from './layouts/iosTimePickerLayout';

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

const FORTY_EIGHT_HOURS = 172800000;

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

class TimePickerModalInner extends React.Component<
  TimePickerModalProps & { t: TFunction, i18n: { language: string } },
  PickerState
> {
  static defaultProps = {
    onSelectTime: () => {},
    onHideModal: () => {},
  };

  constructor(props) {
    super(props);
    this.state = this.getCurrentDisplayedTimeObject();
  }

  componentWillReceiveProps() {
    this.setState(this.getCurrentDisplayedTimeObject());
  }

  getCurrentDisplayedTimeObject() {
    const currentTime = DateTime.local();
    const currentTimeObject = {
      date: currentTime.toFormat('dd.MM.y'),
      hours: currentTime.toFormat('HH'),
      minutes: currentTime.toFormat('mm'),
    };
    this.currentTime = currentTimeObject;
    return currentTimeObject;
  }

  selectedTimeInvalid() {
    const { date, hours, minutes } = this.state;
    const entryTime = DateTime.fromFormat(
      `${date} ${hours}:${minutes}`,
      'dd.MM.y HH:mm'
    );
    const currentTime = DateTime.fromFormat(
      `${this.currentTime.date} ${this.currentTime.hours}:${
        this.currentTime.minutes
      }`,
      'dd.MM.y HH:mm'
    );
    return (
      entryTime.valueOf() < currentTime.valueOf() ||
      entryTime.valueOf() - currentTime.valueOf() > FORTY_EIGHT_HOURS
    );
  }

  userMessage() {
    const { date, hours, minutes } = this.state;
    const { i18n, t } = this.props;
    const { language } = i18n;
    const entryTime = DateTime.fromFormat(
      `${date} ${hours}:${minutes}`,
      'dd.MM.y HH:mm'
    );
    const entryTimePlus = entryTime.plus({ hours: 2 });

    if (this.selectedTimeInvalid()) {
      return (
        <CardHeaderSubText
          style={{ ...ownStyles.validUntilText, color: MAIN_RED }}
          text={t(['timePickerRegistrationTimeInPast'], {
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
      );
    }
    return entryTime.day === entryTimePlus.day ? (
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
    );
  }

  currentTime: PickerState;

  render() {
    const { t, modalVisible, onHideModal, onSelectTime } = this.props;
    const { date, hours, minutes } = this.state;

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

          <IosTimePickerLayout
            date={date}
            hours={hours}
            minutes={minutes}
            t={t}
            pickerModalStyle={pickerModalStyle}
            ownStyles={ownStyles}
            onValueChangeDate={itemValue =>
              this.setState({
                date: itemValue,
              })
            }
            onValueChangeHours={itemValue =>
              this.setState({
                hours: itemValue,
              })
            }
            onValueChangeMinutes={itemValue =>
              this.setState({
                minutes: itemValue,
              })
            }
          />

          {this.userMessage()}

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              confirmationDisabled={this.selectedTimeInvalid()}
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
