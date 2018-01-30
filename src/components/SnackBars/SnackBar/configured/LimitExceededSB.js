// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import {translate} from "react-i18next";
import { SnackBar } from '../SnackBar';
import type {SBState} from "../../SnackBarsContainer";
import type {TFunction} from "../../../../types/generalTypes";

type LimitExceededSBProps = {
    sbState: SBState
}

const LimitExceededSBInner = ({ sbState, t }: LimitExceededSBProps & { t: TFunction }) => (
  <SnackBar text={t('limitExceeded')} sbState={sbState} />
);

export const LimitExceededSB = (translate(['snackBar'])(LimitExceededSBInner): ComponentType<LimitExceededSBProps>)
