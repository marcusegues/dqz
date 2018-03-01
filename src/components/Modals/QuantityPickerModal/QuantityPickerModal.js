// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Picker } from 'react-native';
import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { rangeItemsPicker, amountsPicker } from './pickerData';
import { pickerModalStyle } from '../styles/PickerModal';
import { CategoriesInfo } from '../../../model/constants';
import { ModalCard } from '../ModalCard';
import { PickerComponent } from '../../PickerComponent/PickerComponent';
import { PickerValueSeparator } from '../CurrencyPickerModal/subComponents/PickerValueSeparator';
import { PickerUnitColumn } from './subComponents/PickerUnitColumn';
import type { TFunction } from '../../../types/generalTypes';
import type { Category } from '../../../model/types/basketPeopleAmountsTypes';
import { ModalCloseText } from '../ModalCloseText';
import { StandardAndCustomInputContent } from './subComponents/StandardAndCustomInputContent/StandardAndCustomInputContent';

import { StandardInputContent } from './subComponents/StandardInputContent/StandardInputContent';

type QuantityPickerState = {
  selected: 'standardInput' | 'customInput',
  standardInput: {
    multiplier: string,
    amount: string,
  },
  customInput: {
    units: string,
    decimalUnits: string,
  },
  numberInput: {
    wholePart: string,
    decimalPart: string,
  },
};

type QuantityPickerModalProps = {
  confirmAction: number => void,
  category: Category,
  toggleModalVisible: () => void,
  modalVisible: boolean,
  onlyStandardInput?: boolean,
};

class QuantityPickerModalInner extends React.Component<
  QuantityPickerModalProps & { t: TFunction },
  QuantityPickerState
> {
  static defaultProps = {
    onlyStandardInput: false,
  };

  state = {
    selected: 'standardInput',
    standardInput: {
      multiplier: '1',
      amount: '1',
    },
    customInput: {
      units: '1',
      decimalUnits: '00',
    },
    numberInput: {
      wholePart: '',
      decimalPart: '',
    },
  };

  standardTotalAmount(): number {
    const { number, amount } = this.state.standardInput;

    return Math.max(+number, 0) * Math.max(+amount, 0);
  }

  customTotalAmount(): number {
    const { units, decimalUnits } = this.state.customInput;

    return Math.max(+units, 0) + Math.max(+decimalUnits, 0) / 100;
  }

  numberInputTotalAmount(): number {
    const { wholePart, decimalPart } = this.state.numberInput;

    return Math.max(+wholePart, 0) + Math.max(+decimalPart, 0) / 100;
  }

  render() {
    const { selected } = this.state;
    const {
      t,
      confirmAction,
      category,
      toggleModalVisible,
      modalVisible,
      onlyStandardInput,
    } = this.props;
    const standardInputSelected = selected === 'standardInput';
    const customInputSelected = selected === 'customInput';

    const currentAmount: number = standardInputSelected
      ? this.standardTotalAmount()
      : this.customTotalAmount();

    const inputCurrentAmount: number = this.numberInputTotalAmount();

    const amount: number = onlyStandardInput
      ? inputCurrentAmount
      : currentAmount;

    const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
      count: amount,
    });

    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <ModalCard style={{ width: '95%' }}>
          {onlyStandardInput ? (
            <StandardInputContent
              onChangeText={itemValue =>
                this.setState({
                  numberInput: {
                    ...this.state.numberInput,
                    wholePart: itemValue,
                  },
                })
              }
              value={this.state.numberInput.wholePart}
              category={category}
              amount={amount}
            />
          ) : (
            <StandardAndCustomInputContent />
          )}

          {standardInputSelected && !onlyStandardInput ? (
            <View style={pickerModalStyle.pickerContainer}>
              <PickerComponent
                selectedValue={this.state.standardInput.multiplier}
                onValueChange={itemValue =>
                  this.setState({
                    standardInput: {
                      ...this.state.standardInput,
                      multiplier: itemValue,
                    },
                  })
                }
                mode="dropdown"
                prompt=""
                itemStyle={{}}
              >
                {rangeItemsPicker(1, 100, 1).map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerValueSeparator separator="X" />

              <PickerComponent
                selectedValue={this.state.standardInput.amount}
                onValueChange={itemValue =>
                  this.setState({
                    standardInput: {
                      ...this.state.standardInput,
                      amount: itemValue,
                    },
                  })
                }
                style={{}}
                mode="dropdown"
                prompt=""
                itemStyle={{}}
              >
                {amountsPicker(category).map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerUnitColumn unit={unit} />
            </View>
          ) : (
            <View />
          )}

          {customInputSelected && !onlyStandardInput ? (
            <View style={pickerModalStyle.pickerContainer}>
              <PickerComponent
                selectedValue={this.state.customInput.units}
                onValueChange={itemValue =>
                  this.setState({
                    customInput: {
                      ...this.state.customInput,
                      units: itemValue,
                    },
                  })
                }
                mode="dropdown"
                prompt=""
              >
                {rangeItemsPicker(1, 100, 1).map(i => (
                  <Picker.Item key={i.id} label={i.label} value={i.value} />
                ))}
              </PickerComponent>

              <PickerUnitColumn unit={unit} />
            </View>
          ) : (
            <View />
          )}

          <View style={pickerModalStyle.redButtonWrapper}>
            <RedButton
              onPress={() => confirmAction(amount)}
              text={t(['confirmPicker'], {
                value: `${amount} ${unit}`,
              })}
            />
          </View>
        </ModalCard>
        <ModalCloseText
          onModalHide={toggleModalVisible}
          text={t('closeModalText')}
        />
      </AppModal>
    );
  }
}

export const QuantityPickerModal = (translate(['modal', 'quantityInput', 'units'])(
  QuantityPickerModalInner
): ComponentType<QuantityPickerModalProps>);
