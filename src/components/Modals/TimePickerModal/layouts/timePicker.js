// @flow
import React, { Fragment } from 'react';
// $FlowFixMe
import { Picker, Platform } from 'react-native';
import { PickerComponent } from '../../../Pickers/PickerComponent';
import {
  pickerHours,
  pickerMinutes,
} from '../../QuantityInputModal/pickerData';
import { roundMinutesToString } from '../../../../model/utils';
import { PickerValueSeparator } from '../../CurrencyPickerModal/subComponents/PickerValueSeparator';
import type { TFunction } from '../../../../types/generalTypes';

export const TimePicker = ({
  hours,
  minutes,
  onValueChangeHours,
  onValueChangeMinutes,
  t,
}: {
  t: TFunction,
  hours: string,
  minutes: string,
  onValueChangeHours: (val: string) => void,
  onValueChangeMinutes: (val: string) => void,
}) => (
  <Fragment>
    <PickerComponent
      selectedValue={hours}
      onValueChange={onValueChangeHours}
      mode="dropdown"
      prompt=""
      style={{
        flex: Platform.OS === 'ios' ? 0.15 : 0.3,
        paddingVertical: 10,
      }}
    >
      {pickerHours.map(i => (
        <Picker.Item key={i.id} label={i.label} value={i.value} />
      ))}
    </PickerComponent>

    <PickerValueSeparator separator=":" />

    <PickerComponent
      selectedValue={roundMinutesToString(parseInt(minutes, 10))}
      onValueChange={onValueChangeMinutes}
      mode="dropdown"
      prompt=""
      itemStyle={{}}
      style={{
        flex: Platform.OS === 'ios' ? 0.15 : 0.3,
        paddingVertical: 10,
      }}
    >
      {pickerMinutes.map(i => (
        <Picker.Item key={i.id} label={i.label} value={i.value} />
      ))}
    </PickerComponent>

    <PickerValueSeparator separator={t('timePickerTimePrefix')} />
  </Fragment>
);
