import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Basket from './Basket';

class BasketContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, declaredBasket } = this.props;
    return <Basket declaredBasket={declaredBasket} />;
  }
}

const mapStateToProps = state => ({
  declaredBasket: state.declaredBasket,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
