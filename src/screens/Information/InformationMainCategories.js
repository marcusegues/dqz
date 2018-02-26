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
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { infoCategories, InfoCategory } from './types/information';
import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';

class InformationMainCategoriesInner extends React.Component<{
  t: TFunction,
  navigation: Navigation,
}> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle text={screenProps.t('information:informationTitle')} />
    ),
  });

  componentWillMount() {
    analyticsScreenMounted('Information');
  }

  navigateTo(cat: InfoCategory) {
    const { navigate } = this.props.navigation;
    if (informationSubCategories[cat] === 'noSubCategories') {
      navigate(informationNavigateTo[cat]);
    } else {
      navigate('InformationSubCategories', { infoCategory: cat });
    }
  }

  render() {
    const { t } = this.props;
    return (
      <MainContentContainer>
        <ScrollViewCard>
          {infoCategories.map(cat => (
            <InformationRow
              key={cat}
              source={informationImages[cat]}
              mainText={t(`${cat}MainText`)}
              subText={t(`${cat}SubText`)}
              rowOnPress={() => this.navigateTo(cat)}
            />
          ))}
        </ScrollViewCard>
      </MainContentContainer>
    );
  }
}

export const InformationMainCategories = (translate(['information'])(
  InformationMainCategoriesInner
): ComponentType<{}>);
