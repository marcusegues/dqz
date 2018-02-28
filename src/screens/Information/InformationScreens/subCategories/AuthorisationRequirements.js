// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type AuthorisationRequirementsInnerProps = {
  t: TFunction,
};

const AuthorisationRequirementsInner = ({
  t,
}: AuthorisationRequirementsInnerProps) => (
  <SubCategoryContainer title={t('authorisationRequirementsMainText')}>
    <AppInfoSubText
      text="authorisationRequirements"
      style={{ marginTop: verticalScale(10) }}
    />
  </SubCategoryContainer>
);

export const AuthorisationRequirements = (translate([
  'authorisationRequirements',
])(AuthorisationRequirementsInner): ComponentType<
  AuthorisationRequirementsInnerProps
>);
