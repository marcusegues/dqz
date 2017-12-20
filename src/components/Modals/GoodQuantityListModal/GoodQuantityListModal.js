/* eslint-disable react/prefer-stateless-function,react/prefer-stateless-function */
// @flow
import React from 'react';
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { Text, View } from 'react-native';
import { v4 } from 'uuid';
import { Entypo } from '@expo/vector-icons';
import ModalCard from '../ModalCard';
import AppModal from '../AppModal';
import QuantityInfo from './subcomponents/QuantityInfo';
import {
  getQuantities,
  getTotalQuantity,
} from '../../../model/configurationApi';
import type { QuantityInputState } from '../../QuestionAnswer/QuantityInput/QuantityInputQA';
import type { Basket, Category } from '../../../model/types/basketPeopleTypes';
import RedButton from '../../Buttons/RedButton';
import QuantityRow from './subcomponents/QuantityRow';
import { GREY, MAIN_RED } from '../../../styles/colors';
import { moderateScale } from '../../../styles/Scaling';
import BackArrow from '../../Headers/subcomponents/BackArrow';

export type GoodQuantityListModalProps = {
  quantityInputState: QuantityInputState,
  onHide: () => void,
  onAddQuantity: (category: Category, quantityChange: number) => void,
  onDeleteQuantity: (category: Category, index: number) => void,
  basket: Basket,
};

// TODO remove disable
// eslint-disable-next-line react/prefer-stateless-function
class GoodQuantityListModal extends React.Component<
  GoodQuantityListModalProps,
  any
> {
  render() {
    const { modalVisible, modalCategories } = this.props.quantityInputState;
    const { onHide, onAddQuantity, onDeleteQuantity, basket } = this.props;
    if (modalCategories.category === 'none') {
      return null;
    }
    const quantities = getQuantities(basket, modalCategories.category);
    const totalQuantity =
      modalCategories.category !== 'none'
        ? getTotalQuantity(basket, modalCategories.category)
        : 0;

    return (
      <AppModal modalVisible={modalVisible}>
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
            mainCategory={modalCategories.mainCategory}
            category={modalCategories.category}
            totalQuantity={totalQuantity}
          />
          {quantities.map((q, idx) => (
            <QuantityRow
              key={v4()}
              quantity={q}
              category={modalCategories.category}
              onDelete={() => {
                if (modalCategories.category !== 'none') {
                  onDeleteQuantity(modalCategories.category, idx);
                }
              }}
            />
          ))}
          <Touchable
            style={{ marginTop: 16 }}
            onPress={() => {
              if (modalCategories.category !== 'none') {
                onAddQuantity(modalCategories.category, 1);
              }
            }}
          >
            <Entypo
              name="circle-with-plus"
              size={moderateScale(28)}
              color={MAIN_RED}
            />
          </Touchable>
        </ModalCard>
      </AppModal>
    );
  }
}

export default GoodQuantityListModal;
