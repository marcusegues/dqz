import React from 'react';
import { View } from 'react-native';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import BasketInput from '../../BasketInput/BasketInput';
import { getTotalPeople } from '../../../model/configurationApi';
import { MainCategoriesToCategories } from '../../../types/reducers/declaration';
import * as fromModelApi from '../../../model/configurationApi';
import type { Basket, Category } from '../../../model/types/basketPeopleTypes';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

class QuantityInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.getAnswerComponent = this.getAnswerComponent.bind(this);
    this.getDisplayedCategoriesByMainCategory = this.getDisplayedCategoriesByMainCategory.bind(
      this
    );
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  getDisplayedCategoriesByMainCategory() {
    return MainCategoriesToCategories.filter((cats, mainCat) =>
      this.props.qaState.settings.get('mainCategories').has(mainCat)
    );
  }

  getQuestionComponent() {
    const { people } = this.props.qaState;
    return (
      <ConfirmationCard
        text="Mengeneingabe"
        onAnswer={this.props.onAnswer}
        confirmationDisabled={!getTotalPeople(people)}
      >
        <BasketInput
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={this.props.qaState.basket}
          onBasketChangeQuantity={this.handleUpdate}
        />
      </ConfirmationCard>
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
    const basket = this.props.qaState.basket;

    const updatedBasket = fromModelApi.setQuantity(
      basket,
      category,
      Math.max(0, fromModelApi.getQuantity(basket, category) + quantityChange)
    );
    return this.props.onUpdate(updatedBasket);
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

export default QuantityInputContainer;
