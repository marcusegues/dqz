import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getLargeAmountPresent } from '../../../../../reducers';

class MainCategoriesInfoContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>{`Warenkategorien:`}</Text>
        <Text>{this.props.mainCategories.join(', ')}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mainCategories: state.declaration.getIn(['settings', 'mainCategories']),
});

export default connect(mapStateToProps, null)(MainCategoriesInfoContainer);
