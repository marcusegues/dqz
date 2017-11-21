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
      type: 'DECLARATION_BASKET_CHANGE_QUANTITY',
      categoryName,
      quantityChange,
    }),
  handleAddValueToDeclaredBasket: (categoryName, value) =>
    dispatch({ type: 'DECLARED_BASKET_ADD_VALUE', categoryName, value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DeclareGoodsContainer
);
