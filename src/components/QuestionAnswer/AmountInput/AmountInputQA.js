/* eslint-disable react/no-unused-state */
// @flow
// TODO remove eslint-disable
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import QuantityInputConfirmationCard from '../cards/ConfirmationCard/configured/QuantityInput/QuantityInputConfirmationCard';
import { mainCategoriesToCategories } from '../../../types/reducers/declaration';
import type { MainCategory } from '../../../types/reducers/declaration';
import type {
  Amounts,
  Category,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { CardProps } from '../QuestionAnswerContainer';
import { addAmount } from '../../../model/configurationApi';
import { calculateVat } from '../../../model/vatCalculations';
import AmountInputAnswerCard from '../cards/AnswerCard/configured/AmountInput/AmountInputAnswerCard';
import CurrencyPickerModal from '../../Modals/CurrencyPickerModal/CurrencyPickerModal';
import type { Currency } from '../../../model/currencies';

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

export type AmountInputState = {
  modalVisible: boolean,
  modalCategories: ModalCategoriesType,
};

class AmountInputQA extends React.Component<CardProps, AmountInputState> {
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
    const { currencies } = qaState;
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
        <CurrencyPickerModal
          onHide={() => this.handleHideModal()}
          amountInputState={this.state}
          currencyObject={currencies}
          currencyDate={new Date()}
          basket={qaState.basket}
          onAddAmount={(currency: Currency, amount: number) => {
            this.handleAddAmount(currency, amount);
          }}
          onDeleteAmount={(currency: Currency, index: number) => {
            this.handleDeleteAmount(currency, index);
          }}
        />
      </View>
    );
  }

  getAnswerComponent() {
    const { qaState, questionFlag, onAnswerCardPress } = this.props;
    const { amounts, people, currencies } = qaState;
    return (
      <AmountInputAnswerCard
        onAnswerCardPress={onAnswerCardPress}
        flag={questionFlag}
        vat={calculateVat(amounts, people, currencies).get('totalVat')}
      />
    );
  }

  handleAddAmount(currency: Currency, amount: number) {
    const { amounts } = this.props.qaState;

    const updatedAmounts = addAmount(amounts, currency, amount);
    this.handleUpdate(updatedAmounts);
  }

  // eslint-disable-next-line no-unused-vars
  handleDeleteAmount(currency: Currency, index: number) {
    const { amounts } = this.props.qaState;
    // TODO
    this.handleUpdate(amounts);
  }

  handleUpdate(amounts: Amounts) {
    return this.props.onUpdate(amounts);
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
export default AmountInputQA;
