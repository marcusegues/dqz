// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { translate } from 'react-i18next';
import { moderateScale, verticalScale } from '../../../../../styles/Scaling';
import { pickerModalStyle } from '../../../styles/PickerModal';
import { TextInputWrapper } from '../../../../Input/TextInputWrapper';
import { CardHeaderText } from '../../../../QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { CardHeaderSubText } from '../../../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';

import { PickerUnitColumn } from '../PickerUnitColumn';
import { CategoriesInfo } from '../../../../../model/constants';
import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import type { NumberQuantityInput } from '../../QuantityInputModal';
import type { TFunction } from '../../../../../types/generalTypes';

type StandardInputProps = {
  onChangeText: (itemValue: string) => void,
  value: string,
  category: Category,
  numberInput: NumberQuantityInput,
};

class StandardInputInner extends React.Component<
  StandardInputProps & { t: TFunction }
> {
  numberInputTotalAmount(): number {
    const { wholePart, decimalPart } = this.props.numberInput;

    return Math.max(+wholePart, 0) + Math.max(+decimalPart, 0) / 100;
  }

  render() {
    const { onChangeText, value, category, t } = this.props;
    const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
      count: this.numberInputTotalAmount(),
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
          text={t('quantityInput:standardInputSubText', { category })}
        />

        <View style={pickerModalStyle.textInputContainer}>
          <TextInputWrapper onChangeText={onChangeText} value={value} />
          <PickerUnitColumn unit={unit} style={{ flex: 0.3 }} />
        </View>
      </View>
    );
  }
}

export const StandardInputContent = (translate(['quantityInput', 'units'])(
  StandardInputInner
): ComponentType<StandardInputProps>);
