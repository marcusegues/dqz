// @flow
import React from 'react';
// $FlowFixMe
import { Dimensions, View } from 'react-native';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import GoodQuantityListModal from '../../Modals/GoodQuantityListModal2/GoodQuantityListModal2';
import { setQuantity, getQuantity } from '../../../model/configurationApi';
import { MainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { Category } from '../../../model/types/basketPeopleTypes';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

class QuantityInputQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          onShowQuantityInputModal={() => this.handleShowModal()}
          onAnswer={this.props.onAnswer}
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={this.props.qaState.basket}
          onBasketChangeQuantity={this.handleUpdate}
        />
        <GoodQuantityListModal
          modalVisible={this.state.modalVisible}
          onHide={() => this.handleHideModal()}
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

  handleShowModal() {
    this.setState({ modalVisible: true });
  }

  handleHideModal() {
    this.setState({ modalVisible: false });
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
