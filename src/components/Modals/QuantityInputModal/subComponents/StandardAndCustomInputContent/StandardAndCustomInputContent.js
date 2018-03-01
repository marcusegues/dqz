// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../../types/generalTypes';
import { pickerModalStyle } from '../../../styles/PickerModal';
import { ModalTab } from '../ModalTab';
import { CategoriesInfo } from '../../../../../model/constants';
import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import { StandardInputPicker } from '../StandardInputPicker/StandardInputPicker';
import type {
  CustomQuantityInput,
  StandardQuantityInput,
} from '../../QuantityInputModal';
import { CustomInputPicker } from '../CustomInputPicker/CustomInputPicker';
import { RedButton } from '../../../../Buttons/RedButton';

type StandardAndCustomInputState = {
  selected: 'standardInput' | 'customInput',
};

type StandardAndCustomInputProps = {
  category: Category,
  standardInput: StandardQuantityInput,
  customInput: CustomQuantityInput,
  onMultiplierValueChange: (text: string) => void,
  onAmountValueChange: (text: string) => void,
  onWholePartValueChange: (text: string) => void,
  confirmAction: number => void,
};

class StandardAndCustomInputInner extends React.Component<
  StandardAndCustomInputProps & { t: TFunction },
  StandardAndCustomInputState
> {
  state = {
    selected: 'standardInput',
  };

  standardTotalAmount(): number {
    const { multiplier, amount } = this.props.standardInput;

    return Math.max(+multiplier, 0) * Math.max(+amount, 0);
  }

  customTotalAmount(): number {
    const { wholePart, decimalPart } = this.props.customInput;

    return Math.max(+wholePart, 0) + Math.max(+decimalPart, 0) / 100;
  }

  render() {
    const { selected } = this.state;
    const {
      category,
      standardInput,
      customInput,
      onMultiplierValueChange,
      onAmountValueChange,
      onWholePartValueChange,
      confirmAction,
      t,
    } = this.props;

    const currentAmount =
      selected === 'standardInput'
        ? this.standardTotalAmount()
        : this.customTotalAmount();
    const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
      count: currentAmount,
    });
    return (
      <View>
        <View style={pickerModalStyle.topTouchableContainer}>
          <ModalTab
            activeTab={selected === 'standardInput'}
            onPress={() =>
              this.setState({
                selected: 'standardInput',
              })
            }
            text={t('modal:standardCategoryPicker').toUpperCase()}
          />

          <ModalTab
            activeTab={selected === 'customInput'}
            onPress={() =>
              this.setState({
                selected: 'customInput',
              })
            }
            text={t('modal:individualCategoryPicker').toUpperCase()}
          />
        </View>
        {selected === 'standardInput' ? (
          <StandardInputPicker
            multiplier={standardInput.multiplier}
            amount={standardInput.amount}
            category={category}
            unit={unit}
            onMultiplierValueChange={onMultiplierValueChange}
            onAmountValueChange={onAmountValueChange}
          />
        ) : (
          <CustomInputPicker
            wholePart={customInput.wholePart}
            unit={unit}
            onWholePartValueChange={onWholePartValueChange}
          />
        )}
        <View style={pickerModalStyle.redButtonWrapper}>
          <RedButton
            onPress={() => confirmAction(currentAmount)}
            text={t(['confirmPicker'], {
              value: `${currentAmount} ${unit}`,
            })}
          />
        </View>
      </View>
    );
  }
}

export const StandardAndCustomInputContent = (translate(['modal'])(
  StandardAndCustomInputInner
): ComponentType<StandardAndCustomInputProps>);
