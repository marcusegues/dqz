import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import RedButton from '../Buttons/RedButton';
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
    return MainCategoriesToCategories.filter((cats, mainCat) =>
      this.props.mainCategories.has(mainCat),
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          marginBottom: 16,
          flexDirection: 'column',
        }}
      >
        <NavBar step={2} />
        <BasketInput
          categoriesByMainCategory={this.getDisplayedCategoriesByMainCategory()}
          basket={this.props.basket}
          onDeclarationBasketChangeQuantity={
            this.props.onDeclarationBasketChangeQuantity
          }
        />
        <RedButton
          text="ZUR BEZAHLUNG"
          onPress={() => this.props.navigation.navigate('UnderConstruction')}
        />
      </View>
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
