import React from 'react';
import PropTypes from 'prop-types';

import DeclareGoods from './DeclareGoods';

class DeclareGoodsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { navigate } = this.props.navigation;
    // return <UserProfile user={navigation.state.params.user} />;
    return <DeclareGoods navigate={this.props.navigation.navigate} />;
  }
}

export default DeclareGoodsContainer;
