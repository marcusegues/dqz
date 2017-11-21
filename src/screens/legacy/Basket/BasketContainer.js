import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Basket from './Basket';
import { getTotalDuty } from '../../reducers';

class BasketContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation, declaredBasket, totalDuty } = this.props;
    return <Basket declaredBasket={declaredBasket} totalDuty={totalDuty} />;
  }
}

const mapStateToProps = state => ({
  declaredBasket: state.declaredBasket,
  totalDuty: getTotalDuty(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
