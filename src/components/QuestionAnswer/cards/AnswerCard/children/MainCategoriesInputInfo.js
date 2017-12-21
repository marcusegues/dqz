import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';

class MainCategoriesInputInfo extends React.Component {
  getText() {
    const { mainCategories, t } = this.props;
    if (mainCategories === 'notAnswered' || mainCategories.isEmpty()) {
      return <Text>Warenkategorien - muss noch beantwortet werden</Text>;
    }
    return (
      <View>
        <Text>{`${t(`general:goodCategories`)}:`}</Text>
        <Text>
          {mainCategories.map(key => t(`mainCategories:${key}`)).join(', ')}
        </Text>
      </View>
    );
  }
  render() {
    return <View>{this.getText()}</View>;
  }
}

export default translate(['mainCategories', 'general'])(
  MainCategoriesInputInfo
);
