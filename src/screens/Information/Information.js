// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { ScrollViewCard } from '../../components/General Components/ScrollViewCard';
import { InformationRow } from './subComponents/InformationRow';
import { informationData } from './InformationData';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { analyticsScreenMounted } from '../../analytics/analyticsApi';
import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';

class InformationInner extends React.Component<{
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

  render() {
    const { t, navigation } = this.props;
    return (
      <MainContentContainer>
        <ScrollViewCard>
          {informationData.map(i => (
            <InformationRow
              key={i.id}
              source={i.source}
              mainText={t(i.dataMainText)}
              subText={t(i.dataSubText)}
              rowOnPress={() => navigation.navigate('UnderConstruction')}
            />
          ))}
        </ScrollViewCard>
      </MainContentContainer>
    );
  }
}

export const Information = (translate(['information'])(
  InformationInner
): ComponentType<{}>);
