// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { ModalCard } from '../ModalCard';

import type { TFunction } from '../../../types/generalTypes';
import type { Category } from '../../../model/types/basketPeopleAmountsTypes';
import { ModalCloseText } from '../ModalCloseText';
import { StandardAndCustomQuantityInput } from './subComponents/StandardAndCustomQuantityInput/StandardAndCustomQuantityInput';

import { StandardQuantityInput } from './subComponents/StandardQuantityInput/StandardQuantityInput';
import { QuantityInputModalFooter } from './subComponents/QuantityInputModalFooter';
import { CategoriesInfo } from '../../../model/constants';
import { StandardInputPicker } from '../../Pickers/QuantityInputPickers/StandardInputPicker';
import { CustomInputPicker } from '../../Pickers/QuantityInputPickers/CustomInputPicker';
import { ManualInputPicker } from '../../Pickers/QuantityInputPickers/ManualInputPicker';

export type StandardQuantityInputType = {
  multiplier: string,
  amount: string,
};

export type CustomQuantityInputType = {
  wholePart: string,
  decimalPart: string,
};

export type ManualQuantityInputType = {
  wholePart: string,
  decimalPart: string,
};

type QuantityInputMethod = 'standardInput' | 'standardAndCustomInput';

type InputMethod = 'manual' | 'picker' | 'none';

type CategoryQuantityInputInfoType = {
  quantityInputMethod: QuantityInputMethod,
  standardInputMethod: InputMethod,
  customInputMethod: InputMethod,
};

type QuantityInputTypeByCategoryType = {
  [Category]: CategoryQuantityInputInfoType,
};

const quantityInputTypeByCategory: QuantityInputTypeByCategoryType = {
  Meat: {
    quantityInputMethod: 'standardInput',
    standardInputMethod: 'picker',
    customInputMethod: 'none',
  },
  Butter: {
    quantityInputMethod: 'standardInput',
    standardInputMethod: 'manual',
    customInputMethod: 'none',
  },
  Oils: {
    quantityInputMethod: 'standardAndCustomInput',
    standardInputMethod: 'picker',
    customInputMethod: 'manual',
  },
  AlcSoft: {
    quantityInputMethod: 'standardAndCustomInput',
    standardInputMethod: 'picker',
    customInputMethod: 'manual',
  },
  AlcHard: {
    quantityInputMethod: 'standardAndCustomInput',
    standardInputMethod: 'picker',
    customInputMethod: 'manual',
  },
  Cigarettes: {
    quantityInputMethod: 'standardAndCustomInput',
    standardInputMethod: 'picker',
    customInputMethod: 'manual',
  },
  Tobacco: {
    quantityInputMethod: 'standardAndCustomInput',
    standardInputMethod: 'picker',
    customInputMethod: 'manual',
  },
};

export type SelectedInput = 'standard' | 'custom';

type QuantityInputState = {
  selected: SelectedInput,
  standardInput: StandardQuantityInputType,
  customInput: CustomQuantityInputType,
  numberInput: ManualQuantityInputType,
};

type QuantityInputModalProps = {
  confirmAction: number => void,
  category: Category,
  toggleModalVisible: () => void,
  modalVisible: boolean,
};

class QuantityInputModalInner extends React.Component<
  QuantityInputModalProps & { t: TFunction },
  QuantityInputState
> {
  static defaultProps = {
    quantityInputType: 'standardAndCustomInput',
    customInputType: 'manual',
    standardInputType: 'picker',
  };

  state = {
    selected: 'standard',
    standardInput: {
      multiplier: '1',
      amount: '1',
    },
    customInput: {
      wholePart: '1',
      decimalPart: '00',
    },
    numberInput: {
      wholePart: '',
      decimalPart: '',
    },
  };

  getCustomInputPicker() {
    return (
      <CustomInputPicker
        wholePart={this.state.customInput.wholePart}
        unit={this.getUnit()}
        onCustomWholePartValueChange={itemValue =>
          this.setState({
            customInput: {
              ...this.state.customInput,
              wholePart: itemValue,
            },
          })
        }
      />
    );
  }

  getManualInputPicker() {
    return (
      <ManualInputPicker
        value={this.state.numberInput.wholePart}
        unit={this.getUnit()}
        onChangeText={text =>
          this.setState({
            numberInput: {
              ...this.state.numberInput,
              wholePart: text,
            },
          })
        }
      />
    );
  }

  getStandardInputPicker() {
    const { multiplier, amount } = this.state.standardInput;
    const { category } = this.props;
    return (
      <StandardInputPicker
        multiplier={multiplier}
        amount={amount}
        category={category}
        unit={this.getUnit()}
        onMultiplierValueChange={itemValue =>
          this.setState({
            standardInput: {
              ...this.state.standardInput,
              multiplier: itemValue,
            },
          })
        }
        onAmountValueChange={itemValue =>
          this.setState({
            standardInput: {
              ...this.state.standardInput,
              amount: itemValue,
            },
          })
        }
      />
    );
  }

  getUnit() {
    const { category, t } = this.props;
    const currentAmount = this.currentAmount();

    return t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
      count: currentAmount,
    });
  }

  getCategoryQuantityInputInfo() {
    return quantityInputTypeByCategory[this.props.category];
  }

  standardTotalAmount(): number {
    const { multiplier, amount } = this.state.standardInput;

    return Math.max(+multiplier, 0) * Math.max(+amount, 0);
  }

  customTotalAmount(): number {
    const { wholePart, decimalPart } = this.state.customInput;

    return Math.max(+wholePart, 0) + Math.max(+decimalPart, 0) / 100;
  }

  numberTotalAmount(): number {
    const { wholePart, decimalPart } = this.state.numberInput;

    return Math.max(+wholePart, 0) + Math.max(+decimalPart, 0) / 100;
  }

  currentAmount() {
    const { selected } = this.state;
    const {
      quantityInputMethod,
      standardInputMethod,
      customInputMethod,
    } = this.getCategoryQuantityInputInfo();
    if (quantityInputMethod === 'standardInput') {
      return standardInputMethod === 'manual'
        ? this.numberTotalAmount()
        : this.standardTotalAmount();
    }
    // eslint-disable-next-line no-nested-ternary
    return selected === 'standard'
      ? standardInputMethod === 'manual'
        ? this.numberTotalAmount()
        : this.standardTotalAmount()
      : customInputMethod === 'manual'
        ? this.numberTotalAmount()
        : this.customTotalAmount();
  }

  render() {
    const { selected } = this.state;
    const {
      t,
      confirmAction,
      category,
      toggleModalVisible,
      modalVisible,
    } = this.props;

    const currentAmount = this.currentAmount();

    const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
      count: currentAmount,
    });

    const categoryQuantityInputInfo = this.getCategoryQuantityInputInfo();
    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <ModalCard style={{ width: '95%' }}>
          {categoryQuantityInputInfo.quantityInputMethod === 'standardInput' ? (
            <StandardQuantityInput category={category}>
              {categoryQuantityInputInfo.standardInputMethod === 'manual'
                ? this.getManualInputPicker()
                : this.getStandardInputPicker()}
            </StandardQuantityInput>
          ) : (
            <StandardAndCustomQuantityInput
              selected={selected}
              onTabSelect={selectedTab =>
                this.setState({ selected: selectedTab })
              }
            >
              {{
                standardInputPicker:
                  categoryQuantityInputInfo.standardInputMethod === 'manual'
                    ? this.getManualInputPicker()
                    : this.getStandardInputPicker(),
                customInputPicker:
                  categoryQuantityInputInfo.customInputMethod === 'manual'
                    ? this.getManualInputPicker()
                    : this.getCustomInputPicker(),
              }}
            </StandardAndCustomQuantityInput>
          )}
          <QuantityInputModalFooter
            onPress={() => confirmAction(currentAmount)}
            text={t(['modal:confirmPicker'], {
              value: `${currentAmount} ${unit}`,
            })}
          />
        </ModalCard>
        <ModalCloseText
          onModalHide={toggleModalVisible}
          text={t('closeModalText')}
        />
      </AppModal>
    );
  }
}

export const QuantityInputModal = (translate([
  'modal',
  'quantityInput',
  'units',
])(QuantityInputModalInner): ComponentType<QuantityInputModalProps>);
