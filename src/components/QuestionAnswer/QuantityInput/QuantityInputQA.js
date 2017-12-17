// @flow
import React from 'react';
// $FlowFixMe
import {
  Animated,
  Dimensions,
  View,
  Modal,
  Text,
  Platform,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import GoodQuantityListModal from '../../Modals/GoodQuantityListModal2/GoodQuantityListModal2';
import { setQuantity, getQuantity } from '../../../model/configurationApi';
import { MainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleTypes';
import { verticalScale } from '../../../styles/Scaling';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

const { height } = Dimensions.get('window');

class QuantityInputQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityModalAnim: new Animated.Value(height), // Initial value for position top: screen height
      modalVisible: false,
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
          onShowQuantityInputModal={() => this.showModal()}
          onAnswer={this.props.onAnswer}
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={this.props.qaState.basket}
          onBasketChangeQuantity={this.handleUpdate}
        />
        <GoodQuantityListModal
          modalVisible={this.state.modalVisible}
          onHide={() => this.hideModal()}
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

  showModal() {
    this.setState({ modalVisible: true });
  }

  hideModal() {
    this.setState({ modalVisible: false });
  }

  showQuantityInputModal() {
    Animated.spring(
      this.state.quantityModalAnim, // The animated value to drive
      {
        toValue: -100, // Animate to position top: 0
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
