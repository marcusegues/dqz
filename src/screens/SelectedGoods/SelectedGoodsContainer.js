import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectedGoods from './SelectedGoods';

class SelectedGoodsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // return <UserProfile user={navigation.state.params.user} />;
    return <SelectedGoods navigation={this.props.navigation} />;
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleChangeQuantityDeclaredBasketItem: (itemName, quantityChange) =>
    dispatch({
      type: 'INCREMENT_DECLARED_BASKET_ITEM',
      itemName,
      quantityChange,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  SelectedGoodsContainer
);
