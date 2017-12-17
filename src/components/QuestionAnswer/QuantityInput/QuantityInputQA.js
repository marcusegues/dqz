// @flow
import React from 'react';
// $FlowFixMe
import { Animated, Dimensions, View } from 'react-native';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import GoodQuantityListModal from '../../Modals/GoodQuantityListModal/GoodQuantityListModal';
import { setQuantity, getQuantity } from '../../../model/configurationApi';
import { MainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleTypes';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

const { height } = Dimensions.get('window');

class QuantityInputQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityModalAnim: new Animated.Value(height), // Initial value for position top: screen height
    };
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

  getDisplayedCategoriesByMainCategory() {
    return MainCategoriesToCategories.filter((cats, mainCat) =>
      this.props.qaState.settings.get('mainCategories').has(mainCat)
    );
  }

  getQuestionComponent() {
    return (
      <View>
        <QuantityInputConfirmationCard
          onShowQuantityInputModal={() => this.showQuantityInputModal()}
          onAnswer={this.props.onAnswer}
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={this.props.qaState.basket}
          onBasketChangeQuantity={this.handleUpdate}
        />
        <GoodQuantityListModal
          positionTop={this.state.quantityModalAnim}
          onHideModal={() => this.hideQuantityInputModal()}
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

  showQuantityInputModal() {
    Animated.spring(
      this.state.quantityModalAnim, // The animated value to drive
      {
        toValue: 0, // Animate to position top: 0
        speed: 20,
        bounciness: 0,
      }
    ).start(); // Starts the animation
  }

  hideQuantityInputModal() {
    Animated.spring(
      // Animate over time
      this.state.quantityModalAnim, // The animated value to drive
      {
        toValue: height, // Animate to position top: 0
        speed: 20,
        bounciness: 0,
      }
    ).start(); // Starts the animation
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
