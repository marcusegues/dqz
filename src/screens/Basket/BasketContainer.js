import React from 'react';
import PropTypes from 'prop-types';

import Basket from './Basket';

class BasketContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return <Basket />;
  }
}

export default BasketContainer;
