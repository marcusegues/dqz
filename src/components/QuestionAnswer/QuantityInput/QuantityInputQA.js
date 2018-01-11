// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { QuantityInputConfirmationCard } from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import { GoodQuantityListModal } from '../../Modals/GoodQuantityListModal/GoodQuantityListModal';
import type { MainCategory } from '../../../types/reducers/appReducer';
import type {
  Basket,
  Category,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { CardProps } from '../QuestionAnswerContainer';
import { QuantityInputAnswerCard } from '../cards/AnswerCard/configured/QuantityInput/QuantityInputAnswerCard';
import { addQuantity, deleteQuantity } from '../../../model/configurationApi';
import { calculateDuty } from '../../../model/dutyCalculations';
import { analyticsQACardOpenend } from '../../../analytics/analyticsApi';

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
    analyticsQACardOpenend('QuantityInput');
    const { modalVisible, modalCategory, modalMainCategory } = this.state;
    const { onAnswer, qaState } = this.props;
    const { basket, settings } = qaState;
    return (
      <View>
        <QuantityInputConfirmationCard
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
