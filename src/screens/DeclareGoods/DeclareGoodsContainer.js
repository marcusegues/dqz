import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeclareGoods from './DeclareGoods';
import { getDutyForCategory } from '../../reducers';

class DeclareGoodsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { navigate } = this.props.navigation;
    // return <UserProfile user={navigation.state.params.user} />;
    return (
      <DeclareGoods
        navigation={this.props.navigation}
        getDutyForCategory={this.props.getDutyForCategory}
      />
    );
  }
}

const mapStateToProps = state => ({
  getDutyForCategory: categoryName => getDutyForCategory(state, categoryName),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  DeclareGoodsContainer
);
