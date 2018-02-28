// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import type { TFunction } from '../../../../types/generalTypes';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';

type SouvenirsAndSpeciesProtectionInnerProps = {
  t: TFunction,
};

const SouvenirsAndSpeciesProtectionInner = ({
  t,
}: SouvenirsAndSpeciesProtectionInnerProps) => (
  <SubCategoryContainer title={t('SouvenirsAndSpeciesProtection')}>
    <AppInfoSubText text="SouvenirsAndSpeciesProtection" />
  </SubCategoryContainer>
);

export const SouvenirsAndSpeciesProtection = (translate([
  'souvenirsAndSpecies',
])(SouvenirsAndSpeciesProtectionInner): ComponentType<
  SouvenirsAndSpeciesProtectionInnerProps
>);
