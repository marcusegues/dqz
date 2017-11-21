import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectedGoods from './SelectedGoods';

class SelectedGoodsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SelectedGoods
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
});

const mapDispatchToProps = dispatch => ({
  handleChangeQuantityDeclaredBasketItem: (categoryName, quantityChange) =>
    dispatch({
      type: 'DECLARATION_BASKET_CHANGE_QUANTITY',
      categoryName,
      quantityChange,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  SelectedGoodsContainer
);
