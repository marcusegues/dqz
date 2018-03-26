// @flow
import React from 'react';
// $FlowFixMe
import { Linking } from 'react-native';
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
import { borderCrossingsLinks, infoCategories } from './types/information';
import type { InfoCategory } from './types/information';
import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';
import type { Language } from '../../i18n/types/locale';

class InformationMainCategoriesInner extends React.Component<{
  t: TFunction,
  navigation: Navigation,
  i18n: { language: Language },
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
    const { dispatch } = this.props.navigation;
    if (informationSubCategories[cat] === 'noSubCategories') {
      dispatch({
        type: 'NAVIGATE',
        screen: informationNavigateTo[cat].toString(),
      }); // TODO: proper types. This toString should not be here.
    } else {
      dispatch({
        type: 'NAVIGATE',
        screen: 'InformationSubCategories',
        params: { infoCategory: cat },
      });
    }
  }

  linkTo = () => {
    const { i18n } = this.props;
    Linking.openURL(`${borderCrossingsLinks[i18n.language]}`);
  };

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
              rowOnPress={
                cat === 'borderCrossings'
                  ? () => this.linkTo()
                  : () => this.navigateTo(cat)
              }
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
