// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { SnackBar } from '../SnackBar';
import type { SnackBarVisibility } from '../../SnackBarsContainer';
import type { TFunction } from '../../../../types/generalTypes';

type LimitExceededSnackBarProps = {
  visibility: SnackBarVisibility,
};

const LimitExceededSnackBarInner = ({
  visibility,
  t,
}: LimitExceededSnackBarProps & { t: TFunction }) => (
  <SnackBar text={t('limitExceeded')} visibility={visibility} />
);

export const LimitExceededSnackBar = (translate(['snackBar'])(
  LimitExceededSnackBarInner
): ComponentType<LimitExceededSnackBarProps>);
