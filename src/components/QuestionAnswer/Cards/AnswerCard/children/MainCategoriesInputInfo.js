// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import type { MainCategories } from '../../../../../types/reducers/declaration';
import type { TFunction } from '../../../../../types/generalTypes';
import { CollapsedCardText } from '../../subcomponents/CollapsedCardText';

type MainCategoriesInputInfoProps = {
  mainCategories: MainCategories,
};

class MainCategoriesInputInfoInner extends React.Component<
  MainCategoriesInputInfoProps & { t: TFunction }
> {
  getText() {
    const { mainCategories, t } = this.props;
    if (mainCategories === 'notAnswered' || mainCategories.isEmpty()) {
      return (
        <Text>{t('mainCategoriesInput:mainCategoriesNotYetAnswered')}</Text>
      );
    }
    return (
      <View>
        <CollapsedCardText text={`${t(`general:goodCategories`)}:`} />
        <CollapsedCardText
          text={mainCategories
            .map(key => t(`mainCategories:${key}`))
            .join(', ')}
        />
      </View>
    );
  }

  render() {
    return <View>{this.getText()}</View>;
  }
}

export const MainCategoriesInputInfo = (translate([
  'mainCategories',
  'mainCategoriesInput',
])(MainCategoriesInputInfoInner): ComponentType<MainCategoriesInputInfoProps>);
