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
import { infoCategories } from './types/information';
import type { InfoCategory } from './types/information';
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
    // navigation.dispatch({ type: 'NAVIGATE', screen: nextScreen });
    const { navigation } = this.props;
    // const { navigate } = this.props.navigation;
    if (informationSubCategories[cat] === 'noSubCategories') {
      navigation.dispatch({
        type: 'NAVIGATE',
        screen: informationNavigateTo[cat].toString(),
      }); // TODO: proper types. This toString should not be here.
      // navigate(informationNavigateTo[cat].toString()); // TODO: proper types. This toString should not be here.
    } else {
      navigation.dispatch({
        type: 'NAVIGATE',
        screen: 'InformationSubCategories',
        params: { infoCategory: cat },
      });
      // navigate('InformationSubCategories', { infoCategory: cat });
    }
  }

  render() {
    const { t } = this.props;
    return (
      <MainContentContainer>
        <ScrollViewCard>
          {infoCategories.map((cat, idx) => (
            <InformationRow
              key={cat}
              source={informationImages[cat]}
              mainText={t(`${cat}MainText`)}
              rowOnPress={() => this.navigateTo(cat)}
              // borderTop={idx === 0}
              borderBottom={idx !== infoCategories.length - 1}
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
