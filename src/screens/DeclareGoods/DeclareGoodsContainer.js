import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeclareGoods from './DeclareGoods';

class DeclareGoodsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DeclareGoods
        navigation={this.props.navigation}
        declaredBasket={this.props.declaredBasket}
        onChangeQuantityDeclaredBasketItem={
          this.props.handleChangeQuantityDeclaredBasketItem
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  declaredBasket: state.declaredBasket,
  state,
});

const mapDispatchToProps = dispatch => ({
  handleChangeQuantityDeclaredBasketItem: (categoryName, quantityChange) =>
    dispatch({
      type: 'CHANGE_QUANTITY_DECLARED_BASKET_ITEM',
      categoryName,
      quantityChange,
    }),
  handleAddValueToDeclaredBasket: (categoryName, value) =>
    dispatch({ type: 'ADD_VALUE_TO_DECLARED_BASKET', categoryName, value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DeclareGoodsContainer
);
