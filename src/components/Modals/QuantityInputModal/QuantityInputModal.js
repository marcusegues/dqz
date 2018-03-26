// @flow
import React from 'react';
// $FlowFixMe
import { Keyboard, LayoutAnimation } from 'react-native';
import type { ComponentType } from 'react';
import debounce from 'lodash/debounce';
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
import { displayedQuantityDecimalPlaces } from '../../../constants/declaration';
import { parseInputToFloat } from '../../../utils/inputparser/inputParser';

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
    standardInputMethod: 'manual',
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
  top: string,
};

type QuantityInputModalProps = {
  confirmAction: number => void,
  category: Category,
  toggleModalVisible: () => void,
  modalVisible: boolean,
};

const initialState = {
  selected: 'standard',
  top: '15%',

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

class QuantityInputModalInner extends React.Component<
  QuantityInputModalProps & { t: TFunction },
  QuantityInputState
> {
  static defaultProps = {
    quantityInputType: 'standardAndCustomInput',
    customInputType: 'manual',
    standardInputType: 'picker',
  };

  constructor(props) {
    super(props);
    this.debouncedOnConfirmationAction = debounce(
      this.onConfirmAction.bind(this),
      1000,
      {
        leading: true,
        trailing: false,
      }
    );
  }

  state = initialState;

  componentWillMount() {
    // $FlowFixMe
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow
    );
    // $FlowFixMe
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide
    );
  }

  componentWillUnmount() {
    // $FlowFixMe
    this.keyboardDidShowListener.remove();
    // $FlowFixMe
    this.keyboardDidHideListener.remove();
  }

  onConfirmAction() {
    this.props.confirmAction(this.currentAmount());
    this.resetInputs();
  }

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

  getManualInputPicker(category: Category) {
    const onChangeText = (text: string): void => {
      // if (displayedQuantityDecimalPlaces[category] === 0) {
      //   if (/\D/.test(text)) {
      //     return;
      //   }
      // }
      // // convert comma to period
      // const textModified: string = text.replace(/,/g, '.');
      // // if more than one period, return
      // if (textModified.indexOf('.') !== textModified.lastIndexOf('.')) {
      //   return;
      // }
      // // return on any input that is not numeric or a period
      // if (/[^0-9.]/.test(textModified)) {
      //   return;
      // }
      const textModified = parseInputToFloat(
        text,
        6,
        displayedQuantityDecimalPlaces[category]
      );

      this.setState({
        numberInput: {
          ...this.state.numberInput,
          wholePart: textModified,
        },
      });
    };

    return (
      <ManualInputPicker
        value={this.state.numberInput.wholePart}
        unit={this.getUnit()}
        onChangeText={onChangeText}
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

  keyboardDidShow = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      top: '15%',
    });
  };

  keyboardDidHide = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      top: '25%',
    });
  };

  resetInputs() {
    this.setState(initialState);
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

  debouncedOnConfirmationAction: any;

  render() {
    const { selected } = this.state;
    const { t, category, toggleModalVisible, modalVisible } = this.props;

    const currentAmount = this.currentAmount();

    const unit = t(`units:${CategoriesInfo.getIn([category, 'unit'], '')}`, {
      count: currentAmount,
    });

    const categoryQuantityInputInfo = this.getCategoryQuantityInputInfo();
    const manualInput =
      categoryQuantityInputInfo.standardInputMethod === 'manual';
    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
      >
        <ModalCard
          style={{
            width: '95%',
            top: manualInput ? this.state.top : 0,
            position: manualInput ? 'absolute' : 'relative',
          }}
        >
          {categoryQuantityInputInfo.quantityInputMethod === 'standardInput' ? (
            <StandardQuantityInput category={category}>
              {categoryQuantityInputInfo.standardInputMethod === 'manual'
                ? this.getManualInputPicker(category)
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
                    ? this.getManualInputPicker(category)
                    : this.getStandardInputPicker(),
                customInputPicker:
                  categoryQuantityInputInfo.customInputMethod === 'manual'
                    ? this.getManualInputPicker(category)
                    : this.getCustomInputPicker(),
              }}
            </StandardAndCustomQuantityInput>
          )}
          <QuantityInputModalFooter
            onPress={this.debouncedOnConfirmationAction}
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
