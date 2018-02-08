// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { SnackBar } from '../SnackBar';
import type { SnackBarVisibility } from '../../SnackBarsContainer';
import type { TFunction } from '../../../../types/generalTypes';

type LimitExceededSnackBarProps = {
  visibility: SnackBarVisibility,
  bottomMost: boolean,
};

const LimitExceededSnackBarInner = ({
  visibility,
  t,
  bottomMost,
}: LimitExceededSnackBarProps & { t: TFunction }) => (
  <SnackBar
    text={t('limitExceeded')}
    visibility={visibility}
    bottomMost={bottomMost}
  />
);

export const LimitExceededSnackBar = (translate(['snackBar'])(
  LimitExceededSnackBarInner
): ComponentType<LimitExceededSnackBarProps>);
