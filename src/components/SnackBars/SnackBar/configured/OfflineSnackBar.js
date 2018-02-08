// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { SnackBar } from '../SnackBar';
import type { SnackBarVisibility } from '../../SnackBarsContainer';
import type { TFunction } from '../../../../types/generalTypes';

type OfflineSnackBarProps = {
  visibility: SnackBarVisibility,
  bottomMost: boolean,
};

const OfflineSnackBarInner = ({
  visibility,
  t,
  bottomMost,
}: OfflineSnackBarProps & { t: TFunction }) => (
  <SnackBar
    text={t('offline')}
    visibility={visibility}
    bottomMost={bottomMost}
  />
);

export const OfflineSnackBar = (translate(['snackBar'])(
  OfflineSnackBarInner
): ComponentType<OfflineSnackBarProps>);
