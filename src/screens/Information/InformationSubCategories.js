// @flow
import React from 'react';
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
            <CardHeaderText text={t('informationSubCategoryTitle')} />
          </View>
          {informationSubCategories[infoCategory].map((cat, idx) => (
            <InformationRow
              key={cat}
              borderTop={idx === 0}
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
