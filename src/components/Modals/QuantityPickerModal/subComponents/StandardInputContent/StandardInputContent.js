// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { translate } from 'react-i18next';
import { moderateScale, verticalScale } from '../../../../../styles/Scaling';
import { pickerModalStyle } from '../../../styles/PickerModal';
import { PickerTextInput } from '../PickerTextInput';
import { CardHeaderText } from '../../../../QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { CardHeaderSubText } from '../../../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';

import { PickerUnitColumn } from '../PickerUnitColumn';
import { CategoriesInfo } from '../../../../../model/constants';
import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../../../types/generalTypes';

type StandardInputProps = {
  onChangeText: (itemValue: string) => void,
  value: string,
  category: Category,
  amount: number,
};

const StandardInputInner = ({
  onChangeText,
  value,
  category,
  amount,
  t,
}: StandardInputProps & { t: TFunction }) => {
  const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
    count: amount,
  });
  return (
    <View>
      <View
        style={{
          marginTop: verticalScale(16),
          marginLeft: moderateScale(16),
        }}
      >
        <CardHeaderText text={t('quantityInput:enterQuantity')} />
      </View>
      <CardHeaderSubText
        text={t('quantityInput:$standardInputSubText', { category })}
      />

      <View style={pickerModalStyle.textInputContainer}>
        <PickerTextInput onChangeText={onChangeText} value={value} />
        <PickerUnitColumn unit={unit} style={{ flex: 0.3 }} />
      </View>
    </View>
  );
};

export const StandardInput = (translate(['quantityInput', 'units'])(
  StandardInputInner
): ComponentType<StandardInputProps>);
