// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { v4 } from 'uuid';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import ModalCard from '../ModalCard';
import AppModal from '../AppModal';
import QuantityInfo from './subcomponents/QuantityInfo';
import {
  getQuantities,
  getTotalQuantity,
} from '../../../model/configurationApi';
import type { QuantityInputState } from '../../QuestionAnswer/QuantityInput/QuantityInputQA';
import type { Basket, Category } from '../../../model/types/basketPeopleTypes';

export type GoodQuantityListModalProps = {
  quantityInputState: QuantityInputState,
  onHide: () => void,
  onUpdateQuantity: (category: Category, quantityChange: number) => void,
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
    const { onHide, onUpdateQuantity, basket } = this.props;
    if (modalCategories.category === 'none') {
      return null;
    }
    const quantities = getQuantities(basket, modalCategories.category);
    return (
      <AppModal modalVisible={modalVisible}>
        <ModalCard>
          <QuantityInfo
            mainCategory={modalCategories.mainCategory}
            category={modalCategories.category}
            quantity={() => {
              if (modalCategories.category !== 'none') {
                getTotalQuantity(basket, modalCategories.category);
              }
            }}
          />
          <View>{quantities.map(q => <Text key={v4()}>{q}</Text>)}</View>
          <Touchable
            onPress={() => {
              if (modalCategories.category !== 'none') {
                onUpdateQuantity(modalCategories.category, 1);
              }
            }}
          >
            <Text>Mengen Hinzufügen</Text>
          </Touchable>
          <Touchable onPress={onHide}>
            <Text>Hide</Text>
          </Touchable>
        </ModalCard>
      </AppModal>
    );
  }
}

export default GoodQuantityListModal;
