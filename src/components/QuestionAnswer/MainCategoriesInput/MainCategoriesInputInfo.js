import React from 'react';
import { View, Text } from 'react-native';

class MainCategoriesInputInfo extends React.Component {
  getText() {
    const { mainCategories } = this.props;
    if (mainCategories.isEmpty() || mainCategories === 'notAnswered') {
      return <Text>Warenkategorien - muss noch beantwortet werden</Text>;
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
