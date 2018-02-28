// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';

type AuthorisationRequirementsInnerProps = {
  t: TFunction,
};

const AuthorisationRequirementsInner = ({
  t,
}: AuthorisationRequirementsInnerProps) => (
  <SubCategoryContainer title={t('authorisationRequirementsMainText')}>
    <AppInfoSubText
      text={t('authorisationRequirementsText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('authorisationRequirementsText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <BulletText text={t('authorisationRequirementsText3')} />
    <BulletText text={t('authorisationRequirementsText4')} />
    <BulletText text={t('authorisationRequirementsText5')} />
    <BulletText text={t('authorisationRequirementsText6')} />
    <BulletText text={t('authorisationRequirementsText7')} />
    <BulletText text={t('authorisationRequirementsText8')} />
    <BulletText text={t('authorisationRequirementsText9')} />
    <BulletText text={t('authorisationRequirementsText10')} />
    <BulletText text={t('authorisationRequirementsText11')} />
  </SubCategoryContainer>
);

export const AuthorisationRequirements = (translate([
  'authorisationRequirements',
])(AuthorisationRequirementsInner): ComponentType<
  AuthorisationRequirementsInnerProps
>);
