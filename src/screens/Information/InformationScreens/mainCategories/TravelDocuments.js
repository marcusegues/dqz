// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { TFunction } from '../../../../types/generalTypes';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';

type TravelDocumentsInnerProps = {
  t: TFunction,
};

const TravelDocumentsInner = ({ t }: TravelDocumentsInnerProps) => (
  <SubCategoryContainer title={t('travelDocumentsMainText')}>
    <AppInfoSubText text={t('travelDocumentsText1')} />
    <AppInfoSubText
      text="www.sem.admin.ch"
      style={{
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      }}
    />
    <AppInfoSubText text={t('travelDocumentsText2')} />
    <AppInfoSubText
      text="www.wcoomd.org"
      style={{
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      }}
    />
  </SubCategoryContainer>
);

export const TravelDocuments = (translate(['travelDocuments'])(
  TravelDocumentsInner
): ComponentType<TravelDocumentsInnerProps>);
