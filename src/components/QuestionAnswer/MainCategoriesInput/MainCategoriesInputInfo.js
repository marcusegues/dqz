import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const MainCategoriesInputInfo = ({ mainCategories }) => (
  <View>
    <Text>Warenkategorien:</Text>
    <Text>{mainCategories.join(', ')}</Text>
  </View>
);

export default MainCategoriesInputInfo;
