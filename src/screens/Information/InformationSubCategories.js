// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
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

import { MainContentContainer } from '../../components/MainContentContainer/MainContentContainer';
import { CardHeaderText } from '../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { moderateScale } from '../../styles/Scaling';

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
          <View style={{ margin: moderateScale(16) }}>
            <CardHeaderText text={t(`${infoCategory}MainText`)} />
          </View>
          {(informationSubCategories[infoCategory] !== 'noSubCategories'
            ? informationSubCategories[infoCategory]
            : []
          ).map((cat, idx) => (
            <InformationRow
              key={cat}
              borderTop={idx === 0}
              borderBottom={
                idx !== informationSubCategories[infoCategory].length - 1
              }
              source={informationImages[cat]}
              mainText={t(`${cat}:${cat}MainText`)}
              rowOnPress={() =>
                navigation.dispatch({
                  type: 'NAVIGATE',
                  screen: informationNavigateTo[cat].toString(),
                })
              } // TODO: proper types. This toString should not be here.
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
