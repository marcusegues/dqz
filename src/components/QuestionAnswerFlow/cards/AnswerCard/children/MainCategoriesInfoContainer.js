import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const MainCategoriesInfoContainer = ({ mainCategories }) => (
  <View>
    <Text>Warenkategorien:</Text>
    <Text>{mainCategories.join(', ')}</Text>
  </View>
);

const mapStateToProps = state => ({
  mainCategories: state.declaration.getIn(['settings', 'mainCategories']),
});

export default connect(mapStateToProps, null)(MainCategoriesInfoContainer);
