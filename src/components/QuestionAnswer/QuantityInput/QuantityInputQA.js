/* eslint-disable react/no-unused-state */
// @flow
// TODO remove eslint-disable
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import GoodQuantityListModal from '../../Modals/GoodQuantityListModal/GoodQuantityListModal';
import { MainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { MainCategory } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleTypes';
import type { cardProps } from '../QuestionAnswerContainer';
import QuantityInputAnswerCard from '../cards/AnswerCard/configured/QuantityInput/QuantityInputAnswerCard';
import { addQuantity } from '../../../model/configurationApi';

export type ModalCategoryType = Category | 'none';
export type ModalMainCategoryType = MainCategory | 'none';

export type ModalCategoriesType = {
  mainCategory: ModalMainCategoryType,
  category: ModalCategoryType,
};

const initModalCategories = {
  mainCategory: 'none',
  category: 'none',
};

export type QuantityInputState = {
  modalVisible: boolean,
  modalCategories: ModalCategoriesType,
};

class QuantityInputQA extends React.Component<cardProps, QuantityInputState> {
  constructor(props: cardProps) {
    super(props);
    this.state = {
      modalVisible: false,
      modalCategories: initModalCategories,
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
          onShowQuantityInputModal={(modalCategories: ModalCategoriesType) =>
            this.handleShowModal(modalCategories)
          }
          onAnswer={this.props.onAnswer}
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={this.props.qaState.basket}
        />
        <GoodQuantityListModal
          onHide={() => this.handleHideModal()}
          quantityInputState={this.state}
          basket={this.props.qaState.basket}
          onUpdateQuantity={(category: Category, quantityChange: number) => {
            this.handleUpdate(category, quantityChange);
          }}
        />
      </View>
    );
  }

  getAnswerComponent() {
    return (
      <QuantityInputAnswerCard
        onAnswerCardPress={this.props.onAnswerCardPress}
        status={this.props.questionStatus}
        duty={this.props.qaState.duty.totalDuty}
      />
    );
  }

  handleUpdate(category: Category, quantity: number) {
    const { basket } = this.props.qaState;

    const updatedBasket = addQuantity(basket, category, quantity);

    return this.props.onUpdate(updatedBasket);
  }

  handleShowModal(modalCategories: ModalCategoriesType) {
    this.setState({ modalVisible: true, modalCategories });
  }

  handleHideModal() {
    this.setState({
      modalVisible: false,
      modalCategories: initModalCategories,
    });
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
