import React from 'react';
import { SnackBar } from '../SnackBar';

export const LimitExceededSB = ({ sbState }) => (
  <SnackBar text="Limit Exceeded" sbState={sbState} />
);
