// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { QuantityInputConfirmationCard } from '../Cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import { GoodQuantityListModal } from '../../Modals/GoodQuantityListModal/GoodQuantityListModal';
import type { MainCategory } from '../../../types/reducers/declaration';
import type {
  Basket,
  Category,
  Quantity,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { CardProps } from '../QuestionAnswerContainer';
import { QuantityInputAnswerCard } from '../Cards/AnswerCard/configured/QuantityInput/QuantityInputAnswerCard';
import {
  addQuantity,
  deleteQuantity,
  getQuantities,
  getQuantityNumber,
} from '../../../model/configurationApi';
import { calculateDuty } from '../../../model/dutyCalculations';
import { GreyBar } from '../../General Components/GreyBar';

export type QuantityInputState = {
  modalVisible: boolean,
  modalCategory?: Category,
  modalMainCategory?: MainCategory,
};

export class QuantityInputQA extends React.Component<
  CardProps,
  QuantityInputState
> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      modalVisible: false,
      modalCategory: undefined,
      modalMainCategory: undefined,
    };
  }

  getQuestionComponent() {
    const { modalVisible, modalCategory, modalMainCategory } = this.state;
    const { onAnswer, qaState, onConfirmationCardTitlePress } = this.props;
    const { basket, settings } = qaState;
    return (
      <View>
        <GreyBar />
        <QuantityInputConfirmationCard
          onConfirmationCardTitlePress={onConfirmationCardTitlePress}
          onShowQuantityInputModal={(
            modalCategoryShow: Category,
            modalMainCategoryShow: MainCategory
          ) => this.handleShowModal(modalCategoryShow, modalMainCategoryShow)}
          onAnswer={onAnswer}
          mainCategories={settings.get('mainCategories')}
          basket={basket}
        />
        <GoodQuantityListModal
          onHide={() => this.handleHideModal()}
          modalVisible={modalVisible}
          modalCategory={modalCategory}
          modalMainCategory={modalMainCategory}
          basket={basket}
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
    const quantity: Quantity = getQuantities(basket, category).get(index, {
      number: 0,
      date: '',
    });
    const updatedBasket = deleteQuantity(basket, category, index);
    this.handleUpdate(updatedBasket);
  }

  handleUpdate(basket: Basket) {
    return this.props.onUpdate(basket);
  }

  handleShowModal(modalCategory: Category, modalMainCategory: MainCategory) {
    this.setState({ modalVisible: true, modalCategory, modalMainCategory });
  }

  handleHideModal() {
    this.setState({
      modalVisible: false,
      modalCategory: undefined,
      modalMainCategory: undefined,
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
