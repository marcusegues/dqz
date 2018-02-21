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
import { InfoCategory, InfoSubCategories } from './types/information';
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

  navigateTo(cat: InfoCategory) {
    const { navigate } = this.props.navigation;
    if (informationSubCategories[cat] === 'noSubCategories') {
      navigate(informationNavigateTo[cat]);
    } else {
      navigate('InformationSubCategories', { infoCategory: cat });
    }
  }

  render() {
    const { t, navigation } = this.props;
    const { infoCategory } = navigation.state.params;
    return (
      <MainContentContainer>
        <ScrollViewCard>
          <Text>{JSON.stringify(infoCategory)}</Text>

          {infoCategory.map(cat => (
            <InformationRow
              key={cat}
              source={informationImages[cat]}
              mainText={t(`${cat}MainText`)}
              subText={t(`${cat}SubText`)}
              rowOnPress={() => navigation.navigate('UnderConstruction')}
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
