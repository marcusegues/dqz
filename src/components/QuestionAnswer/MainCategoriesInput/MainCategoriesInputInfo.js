import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class MainCategoriesInputInfo extends React.Component {
  getText() {
    const { mainCategories } = this.props;
    if (mainCategories.isEmpty() || mainCategories === 'notAnswered') {
      return <Text>MainCategories Question Incomplete</Text>;
    }
    return (
      <View>
        <Text>Warenkategorien:</Text>
        <Text>{mainCategories.join(', ')}</Text>
      </View>
    );
  }
  render() {
    return <View>{this.getText()}</View>;
  }
}

export default MainCategoriesInputInfo;
