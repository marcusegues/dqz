// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import type { MainCategories } from '../../../../../types/reducers/declaration';
import type { TFunction } from '../../../../../types/generalTypes';

type MainCategoriesInputInfoProps = {
  mainCategories: MainCategories,
};

class MainCategoriesInputInfoInner extends React.Component<
  MainCategoriesInputInfoProps & { t: TFunction }
> {
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

export const MainCategoriesInputInfo = (translate([
  'mainCategories',
  'general',
])(MainCategoriesInputInfoInner): ComponentType<MainCategoriesInputInfoProps>);
