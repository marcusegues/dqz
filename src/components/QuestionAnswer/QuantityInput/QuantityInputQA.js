// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import GoodQuantityListModal from '../../Modals/GoodQuantityListModal/GoodQuantityListModal';
import { setQuantity, getQuantity } from '../../../model/configurationApi';
import {
  MainCategoriesToCategories,
  MainCategory,
} from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleTypes';
import type { cardProps } from '../QuestionAnswerContainer';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

export type State = {
  basket: Basket,
  modalVisible: boolean,
  modalData: {
    mainCategory: MainCategory | 'none',
    category: Category | 'none',
  },
};

const initModalData = {
  mainCategory: 'none',
  category: 'none',
};

class QuantityInputQA extends React.Component<cardProps, State> {
  constructor(props: cardProps) {
    super(props);
    this.state = {
      basket: this.props.basket,
      modalVisible: false,
      modalData: initModalData,
    };
  }

  getDisplayedCategoriesByMainCategory() {
    return MainCategoriesToCategories.filter((cats, mainCat) =>
      this.props.qaState.settings.get('mainCategories').has(mainCat)
    );
  }

  getQuestionComponent() {
    return (
      <View>
        <QuantityInputConfirmationCard
          onShowQuantityInputModal={modalData =>
            this.handleShowModal(modalData)
          }
          onAnswer={this.props.onAnswer}
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={this.props.qaState.basket}
          onBasketChangeQuantity={this.handleUpdate}
        />
        <GoodQuantityListModal
          modalVisible={this.state.modalVisible}
          onHide={() => this.handleHideModal()}
          modalData={this.state.modalData}
        />
      </View>
    );
  }

  getAnswerComponent() {
    return (
      <AnswerCard
        onAnswerCardPress={this.props.onAnswerCardPress}
        mainIcon={mainIcon}
        status={
          this.props.qaState.settings.get('mainCategories').isEmpty()
            ? incomplete
            : complete
        }
      />
    );
  }

  handleUpdate(category: Category, quantityChange: number) {
    const { basket } = this.props.qaState;

    const updatedBasket = setQuantity(
      basket,
      category,
      Math.max(0, getQuantity(basket, category) + quantityChange)
    );
    return this.props.onUpdate(updatedBasket);
  }

  handleShowModal(modalData) {
    this.setState({ modalVisible: true, modalData });
  }

  handleHideModal() {
    this.setState({ modalVisible: false, modalData: initModalData });
  }

  render() {
    switch (this.props.questionState) {
      case 'expanded': {
        return this.getQuestionComponent();
      }
      case 'collapsed': {
        return this.getAnswerComponent();
      }
      default: {
        return <View />;
      }
    }
  }
}
export default QuantityInputQA;
