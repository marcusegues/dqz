// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { ScrollViewCard } from '../../components/General Components/ScrollViewCard';
import { InformationRow } from './subComponents/InformationRow';
import {
  informationImages,
  informationNavigateTo,
  informationSubCategories,
} from './InformationData';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { Navigation, TFunction } from '../../types/generalTypes';
import {
  infoCategories,
  animalsAndPlantsSubCategories,
  vehiclesSubCategories,
  declarationSubCategories,
  InfoCategory,
  InformationSubCategoriesType,
} from './types/information';

import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';
import { Text } from 'react-native';

class InformationSubCategoriesInner extends React.Component<{
  t: TFunction,
  navigation: Navigation,
}> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle text={screenProps.t('information:informationTitle')} />
    ),
  });

  render() {
    const { t, navigation } = this.props;
    const { infoCategory } = navigation.state.params;

    return (
      <MainContentContainer>
        <ScrollViewCard>
          {informationSubCategories[infoCategory].map(cat => (
            <InformationRow
              key={cat}
              source={informationImages[cat]}
              mainText={t(`${cat}MainText`)}
              subText={t(`${cat}SubText`)}
              rowOnPress={() => navigation.navigate(informationNavigateTo[cat])}
            />
          ))}
        </ScrollViewCard>
      </MainContentContainer>
    );
  }
}

export const InformationSubCategories = (translate(['information'])(
  InformationSubCategoriesInner
): ComponentType<{}>);
