// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import GoodQuantityListModal from '../../Modals/GoodQuantityListModal/GoodQuantityListModal';
import { setQuantity, getQuantity } from '../../../model/configurationApi';
import { MainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { MainCategory } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleTypes';
import type { cardProps } from '../QuestionAnswerContainer';
import QuantityInputAnswerCard from '../cards/AnswerCard/configured/QuantityInput/QuantityInputAnswerCard';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

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

  handleUpdate(category: Category, quantityChange: number) {
    const { basket } = this.props.qaState;
    const updatedBasket = setQuantity(
      basket,
      category,
      Math.max(0, getQuantity(basket, category) + quantityChange)
    );
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
