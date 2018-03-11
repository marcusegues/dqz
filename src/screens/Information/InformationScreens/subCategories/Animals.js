// @flow
import React from 'react';
// $FlowFixMe
import { Linking, TouchableOpacity } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoLink } from '../../../AppInfo/subComponents/AppInfoLink';

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

    <AppInfoLink
      text="http://www.blv.admin.ch"
      onPress={() => Linking.openURL('http://www.blv.admin.ch')}
    />

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
      <AppInfoSubText
        text={t('animalsText4')}
        style={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
        }}
      />
    </TouchableOpacity>
  </SubCategoryContainer>
);

export const Animals = (translate(['animals'])(AnimalsInner): ComponentType<
  AnimalsInnerProps
>);
