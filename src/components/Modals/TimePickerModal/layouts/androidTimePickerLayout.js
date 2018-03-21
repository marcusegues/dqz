// @flow
import React, { Fragment } from 'react';
// $FlowFixMe
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { DatePicker } from './datePicker';
import { TimePicker } from './timePicker';
import type { TFunction } from '../../../../types/generalTypes';

type AndroidTimePickerLayoutProps = {
  pickerModalStyle: any,
  ownStyles: any,
  t: TFunction,
  hours: string,
  date: string,
  minutes: string,
  onValueChangeDate: (value: string) => void,
  onValueChangeHours: (value: string) => void,
  onValueChangeMinutes: (value: string) => void,
};

export const AndroidTimePickerLayout = ({
  pickerModalStyle,
  ownStyles,
  t,
  hours,
  minutes,
  date,
  onValueChangeDate,
  onValueChangeHours,
  onValueChangeMinutes,
}: AndroidTimePickerLayoutProps) => (
  <Fragment>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[pickerModalStyle.pickerContainer, ownStyles.container]}>
        <DatePicker date={date} onValueChangeDate={onValueChangeDate} />
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[pickerModalStyle.pickerContainer, ownStyles.container]}>
        <TimePicker
          t={t}
          hours={hours}
          minutes={minutes}
          onValueChangeHours={onValueChangeHours}
          onValueChangeMinutes={onValueChangeMinutes}
        />
      </View>
    </TouchableWithoutFeedback>
  </Fragment>
);
