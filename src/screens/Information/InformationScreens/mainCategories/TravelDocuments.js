// @flow
import React from 'react';
// $FlowFixMe
import { Linking } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { TFunction } from '../../../../types/generalTypes';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoLink } from '../../../AppInfo/subComponents/AppInfoLink';

type TravelDocumentsInnerProps = {
  t: TFunction,
};

const TravelDocumentsInner = ({ t }: TravelDocumentsInnerProps) => (
  <SubCategoryContainer title={t('travelDocumentsMainText')}>
    <AppInfoSubText text={t('travelDocumentsText1')} />

    <AppInfoLink
      text="www.sem.admin.ch"
      onPress={() => Linking.openURL('http://www.sem.admin.ch')}
    />
    <AppInfoSubText text={t('travelDocumentsText2')} />
    <AppInfoLink
      text="www.wcoomd.org"
      onPress={() => Linking.openURL('http://www.wcoomd.org')}
    />
  </SubCategoryContainer>
);

export const TravelDocuments = (translate(['travelDocuments'])(
  TravelDocumentsInner
): ComponentType<TravelDocumentsInnerProps>);
