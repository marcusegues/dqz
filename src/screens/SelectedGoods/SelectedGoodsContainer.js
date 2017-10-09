import React from 'react';
import PropTypes from 'prop-types';

import SelectedGoods from './SelectedGoods';

class SelectedGoodsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    // return <UserProfile user={navigation.state.params.user} />;
    return <SelectedGoods />;
  }
}

export default SelectedGoodsContainer;
