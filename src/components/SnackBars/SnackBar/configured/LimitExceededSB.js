// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { SnackBar } from '../SnackBar';
import type { SnackBarStateType } from '../../SnackBarsContainer';
import type { TFunction } from '../../../../types/generalTypes';

type LimitExceededSBProps = {
  sbState: SnackBarStateType,
};

const LimitExceededSBInner = ({
  sbState,
  t,
}: LimitExceededSBProps & { t: TFunction }) => (
  <SnackBar text={t('limitExceeded')} sbState={sbState} />
);

export const LimitExceededSB = (translate(['snackBar'])(
  LimitExceededSBInner
): ComponentType<LimitExceededSBProps>);
