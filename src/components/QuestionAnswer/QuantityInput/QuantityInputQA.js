// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import { setQuantity, getQuantity } from '../../../model/configurationApi';
import { MainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleTypes';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

// todo: flowtype props
const QuantityInputContainer = (props: any) => {
  const handleUpdate = (category: Category, quantityChange: number) => {
    const { basket } = props.qaState;

    const updatedBasket = setQuantity(
      basket,
      category,
      Math.max(0, getQuantity(basket, category) + quantityChange)
    );
    return props.onUpdate(updatedBasket);
  };

  const getDisplayedCategoriesByMainCategory = () =>
    MainCategoriesToCategories.filter((cats, mainCat) =>
      props.qaState.settings.get('mainCategories').has(mainCat)
    );

  const getQuestionComponent = () => (
    <QuantityInputConfirmationCard
      onAnswer={props.onAnswer}
      categoriesByMainCategory={getDisplayedCategoriesByMainCategory()}
      basket={props.qaState.basket}
      onBasketChangeQuantity={handleUpdate}
    />
  );

  const getAnswerComponent = () => (
    <AnswerCard
      onAnswerCardPress={props.onAnswerCardPress}
      mainIcon={mainIcon}
      status={
        props.qaState.settings.get('mainCategories').isEmpty()
          ? incomplete
          : complete
      }
    />
  );

  switch (props.questionState) {
    case 'expanded': {
      return getQuestionComponent();
    }
    case 'collapsed': {
      return getAnswerComponent();
    }
    default: {
      return <View />;
    }
  }
};

export default QuantityInputContainer;
