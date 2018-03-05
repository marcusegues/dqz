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
  currentEntryTime: string,
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
    const currentEntryTimeObj = DateTime.fromISO(currentEntryTime);
    super();
    this.state = {
      date: currentEntryTimeObj.toFormat('dd.MM.y'),
      hours: currentEntryTimeObj.toFormat('HH'),
      minutes: currentEntryTimeObj.toFormat('mm'),
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
        animationIn="slideInUp"
        animationOut="slideOutDown"
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
                style={{ flex: 0.15 }}
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
                style={{ flex: 0.15 }}
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
                date: entryTime.toFormat('dd.MM.y'),
                startTime:
                  language === 'fr'
                    ? entryTime.toFormat("HH'h'mm")
                    : entryTime.toFormat('HH:mm'),
                endTime:
                  language === 'fr'
                    ? entryTimePlus.toFormat("HH'h'mm")
                    : entryTimePlus.toFormat('HH:mm'),
              })}
            />
          ) : (
            <CardHeaderSubText
              style={ownStyles.validUntilText}
              text={t(['timePickerRegistrationValidUntilDifferentDay'], {
                startDate: entryTime.toFormat('dd.MM.y'),
                startTime:
                  language === 'fr'
                    ? entryTime.toFormat("HH'h'mm")
                    : entryTime.toFormat(`HH:mm`),
                endDate: entryTimePlus.toFormat('dd.MM.y'),
                endTime:
                  language === 'fr'
                    ? entryTimePlus.toFormat("HH'h'mm")
                    : entryTimePlus.toFormat(`HH:mm`),
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
