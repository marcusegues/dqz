// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { verticalScale } from '../../../styles/Scaling';

const ownStyles = {
  container: {
    flex: 1,
    backgroundColor: '#757575',
    alignItems: 'center',
    paddingVertical: verticalScale(5),
    marginVertical: verticalScale(15),
  },
};

type ValidUntilBlockProps = {
  children: any,
};

const ValidUntilBlock = ({ children }: ValidUntilBlockProps) => (
  <View style={ownStyles.container}>{children}</View>
);

export default ValidUntilBlock;
