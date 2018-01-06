/* eslint-disable react/no-unused-state */
// @flow
// TODO remove eslint-disable
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { QuantityInputConfirmationCard } from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import GoodQuantityListModal from '../../Modals/GoodQuantityListModal/GoodQuantityListModal';
import { mainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { MainCategory } from '../../../types/reducers/declaration';
import type {
  Basket,
  Category,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { CardProps } from '../QuestionAnswerContainer';
import { QuantityInputAnswerCard } from '../cards/AnswerCard/configured/QuantityInput/QuantityInputAnswerCard';
import { addQuantity, deleteQuantity } from '../../../model/configurationApi';
import { calculateDuty } from '../../../model/dutyCalculations';

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

export class QuantityInputQA extends React.Component<
  CardProps,
  QuantityInputState
> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      modalVisible: false,
      modalCategories: initModalCategories,
    };
  }

  getDisplayedCategoriesByMainCategory() {
    return mainCategoriesToCategories.filter((cats, mainCat) =>
      this.props.qaState.settings.get('mainCategories').has(mainCat)
    );
  }

  getQuestionComponent() {
    const { onAnswer, qaState } = this.props;
    return (
      <View>
        <QuantityInputConfirmationCard
          onShowQuantityInputModal={(modalCategories: ModalCategoriesType) =>
            this.handleShowModal(modalCategories)
          }
          onAnswer={onAnswer}
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={qaState.basket}
        />
        <GoodQuantityListModal
          onHide={() => this.handleHideModal()}
          quantityInputState={this.state}
          basket={qaState.basket}
          onAddQuantity={(category: Category, quantity: number) => {
            this.handleAddQuantity(category, quantity);
          }}
          onDeleteQuantity={(category: Category, index: number) => {
            this.handleDeleteQuantity(category, index);
          }}
        />
      </View>
    );
  }

  getAnswerComponent() {
    const { qaState, questionFlag, onAnswerCardPress } = this.props;
    const { basket, people } = qaState;
    return (
      <QuantityInputAnswerCard
        onAnswerCardPress={onAnswerCardPress}
        flag={questionFlag}
        duty={calculateDuty(basket, people).get('totalDuty')}
      />
    );
  }

  handleAddQuantity(category: Category, quantity: number) {
    const { basket } = this.props.qaState;

    const updatedBasket = addQuantity(basket, category, quantity);
    this.handleUpdate(updatedBasket);
  }

  handleDeleteQuantity(category: Category, index: number) {
    const { basket } = this.props.qaState;

    const updatedBasket = deleteQuantity(basket, category, index);
    this.handleUpdate(updatedBasket);
  }

  handleUpdate(basket: Basket) {
    return this.props.onUpdate(basket);
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
