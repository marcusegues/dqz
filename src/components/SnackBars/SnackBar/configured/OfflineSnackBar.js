// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { SnackBar } from '../SnackBar';
import type { SnackBarVisibility } from '../../SnackBarsContainer';
import type { TFunction } from '../../../../types/generalTypes';

type OfflineSnackBarProps = {
  visibility: SnackBarVisibility,
};

const OfflineSnackBarInner = ({
  visibility,
  t,
}: OfflineSnackBarProps & { t: TFunction }) => (
  <SnackBar text={t('offline')} visibility={visibility} />
);

export const OfflineSnackBar = (translate(['snackBar'])(
  OfflineSnackBarInner
): ComponentType<OfflineSnackBarProps>);
