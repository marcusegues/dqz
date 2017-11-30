import React from 'react';
import { connect } from 'react-redux';
import {
  getDeclarationBasket,
  getDeclarationMainCategories,
} from '../../reducers';
import { MainCategoriesToCategories } from '../../types/reducers/declaration';
import BasketInput from './BasketInput';

class BasketInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getDisplayedCategoriesByMainCategory = this.getDisplayedCategoriesByMainCategory.bind(
      this,
    );
  }

  getDisplayedCategoriesByMainCategory() {
    return MainCategoriesToCategories.filter((cats, mainCat) => this.props.mainCategories.has(mainCat));
  }

  render() {
    return (
      <BasketInput
        categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
        basket={this.props.basket}
        onDeclarationBasketChangeQuantity={
          this.props.onDeclarationBasketChangeQuantity
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  basket: getDeclarationBasket(state),
  mainCategories: getDeclarationMainCategories(state),
});

const mapDispatchToProps = dispatch => ({
  onDeclarationBasketChangeQuantity: (category, quantityChange) =>
    dispatch({
      type: 'DECLARATION_BASKET_CHANGE_QUANTITY',
      category,
      quantityChange,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  BasketInputContainer,
);
