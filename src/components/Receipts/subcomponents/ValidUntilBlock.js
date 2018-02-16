// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { verticalScale } from '../../../styles/Scaling';
import type { Children } from '../../../types/generalTypes';

const ownStyles = {
  container: {
    flex: 1,
    backgroundColor: '#757575',
    alignItems: 'center',
    width: '100%',
    paddingVertical: verticalScale(5),
    paddingHorizontal: verticalScale(10),
    marginVertical: verticalScale(15),
  },
};

type ValidUntilBlockProps = {
  children: Children,
};

export const ValidUntilBlock = ({ children }: ValidUntilBlockProps) => (
  <View style={ownStyles.container}>{children}</View>
);
