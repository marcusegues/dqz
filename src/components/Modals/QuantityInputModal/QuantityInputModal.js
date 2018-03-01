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
import { StandardAndCustomInputContent } from './subComponents/StandardAndCustomInputContent/StandardAndCustomInputContent';

import { StandardInputContent } from './subComponents/StandardInputContent/StandardInputContent';

export type StandardQuantityInput = {
  multiplier: string,
  amount: string,
};

export type CustomQuantityInput = {
  wholePart: string,
  decimalPart: string,
};

export type NumberQuantityInput = {
  wholePart: string,
  decimalPart: string,
};

type QuantityInputState = {
  standardInput: StandardQuantityInput,
  customInput: CustomQuantityInput,
  numberInput: NumberQuantityInput,
};

type QuantityInputModalProps = {
  confirmAction: number => void,
  category: Category,
  toggleModalVisible: () => void,
  modalVisible: boolean,
  onlyStandardInput?: boolean,
};

class QuantityInputModalInner extends React.Component<
  QuantityInputModalProps & { t: TFunction },
  QuantityInputState
> {
  static defaultProps = {
    onlyStandardInput: false,
  };

  state = {
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


  render() {
    const { standardInput, customInput, numberInput } = this.state;
    const {
      t,
      confirmAction,
      category,
      toggleModalVisible,
      modalVisible,
      onlyStandardInput,
    } = this.props;

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
              numberInput={numberInput}
              confirmAction={confirmAction}
            />
          ) : (
            <StandardAndCustomInputContent
              category={category}
              standardInput={standardInput}
              customInput={customInput}
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
              onWholePartValueChange={itemValue =>
                this.setState({
                  customInput: {
                    ...this.state.customInput,
                    wholePart: itemValue,
                  },
                })
              }
              confirmAction={confirmAction}
            />
          )}
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
