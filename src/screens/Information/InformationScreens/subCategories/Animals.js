// @flow
import React from 'react';
// $FlowFixMe
import { Text, TouchableOpacity } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';

type AnimalsInnerProps = {
  t: TFunction,
  navigation: Navigation,
};

const AnimalsInner = ({ t, navigation }: AnimalsInnerProps) => (
  <SubCategoryContainer title={t('animalsMainText')}>
    <AppInfoSubText
      text={t('animalsText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <TouchableOpacity onPress={() => {}}>
      <Text>http://www.blv.admin.ch</Text>
    </TouchableOpacity>

    <CardRowText
      text={t('animalsText2')}
      style={{ marginTop: verticalScale(20) }}
    />
    <AppInfoSubText text={t('animalsText3')} />
    <TouchableOpacity
      onPress={() =>
        navigation.dispatch({
          type: 'NAVIGATE',
          screen: 'VatAllowance',
        })
      }
    >
      <AppInfoSubText text={t('animalsText4')} />
    </TouchableOpacity>
  </SubCategoryContainer>
);

export const Animals = (translate(['animals'])(AnimalsInner): ComponentType<
  AnimalsInnerProps
>);
