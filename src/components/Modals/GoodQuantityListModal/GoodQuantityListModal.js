// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { Text, View } from 'react-native';
import { v4 } from 'uuid';
import { Entypo } from '@expo/vector-icons';
import { ModalCard } from '../ModalCard';
import { AppModal } from '../AppModal';
import { QuantityInfo } from './subcomponents/QuantityInfo';
import {
  getQuantities,
  getTotalQuantity,
} from '../../../model/configurationApi';
import type { QuantityInputState } from '../../QuestionAnswer/QuantityInput/QuantityInputQA';
import type {
  Basket,
  Category,
} from '../../../model/types/basketPeopleAmountsTypes';
import { QuantityRow } from './subcomponents/QuantityRow';
import { MAIN_RED } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';
import { BackArrow } from '../../Headers/subcomponents/BackArrow';
import { PickerModal } from '../PickerModal/PickerModal';

export type GoodQuantityListModalProps = {
  onHide: () => void,
  onAddQuantity: (category: Category, quantityChange: number) => void,
  onDeleteQuantity: (category: Category, index: number) => void,
  basket: Basket,
} & QuantityInputState;

type GoodQuantityListModalState = {
  pickerModalVisible: boolean,
};

export class GoodQuantityListModal extends React.Component<
  GoodQuantityListModalProps,
  GoodQuantityListModalState
> {
  constructor() {
    super();
    this.state = {
      pickerModalVisible: false,
    };
  }

  togglePickerVisible() {
    this.setState({
      pickerModalVisible: !this.state.pickerModalVisible,
    });
  }

  confirmPicker(amount: number) {
    const { onAddQuantity, modalCategory } = this.props;

    this.togglePickerVisible();
    if (modalCategory) {
      onAddQuantity(modalCategory, amount);
    }
  }

  render() {
    const { pickerModalVisible } = this.state;
    const {
      onHide,
      onDeleteQuantity,
      basket,
      modalVisible,
      modalCategory,
      modalMainCategory,
    } = this.props;
    if (!modalCategory || !modalMainCategory) {
      return null;
    }
    const quantities = getQuantities(basket, modalCategory);
    const totalQuantity = modalCategory
      ? getTotalQuantity(basket, modalCategory)
      : 0;
    return (
      <AppModal
        modalVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <ModalCard>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-start',
              marginLeft: 12,
              marginTop: 12,
            }}
          >
            <BackArrow onPress={onHide} />
            <Text />
          </View>
          <QuantityInfo
            mainCategory={modalMainCategory}
            category={modalCategory}
            totalQuantity={totalQuantity}
          />
          {quantities.map((q, idx) => (
            <QuantityRow
              borderTop={idx === 0}
              key={v4()}
              quantity={q}
              category={modalCategory}
              onDelete={() => {
                if (modalCategory) {
                  onDeleteQuantity(modalCategory, idx);
                }
              }}
            />
          ))}
          <Touchable
            style={{ marginTop: 16 }}
            onPress={() => {
              this.togglePickerVisible();
            }}
          >
            <Entypo
              name="circle-with-plus"
              size={moderateScale(28)}
              color={MAIN_RED}
            />
          </Touchable>
        </ModalCard>
        <PickerModal
          modalVisible={pickerModalVisible}
          toggleModalVisible={() => this.togglePickerVisible()}
          confirmAction={amount => this.confirmPicker(amount)}
          category={modalCategory}
          onlyStandardInput={modalCategory === 'Cigarettes'}
        />
      </AppModal>
    );
  }
}
