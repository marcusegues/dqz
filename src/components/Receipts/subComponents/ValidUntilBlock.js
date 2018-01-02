import React from 'react';
import { Image, View } from 'react-native';
import { scale, verticalScale } from '../../../styles/Scaling';

const ownStyles = {
  container: {
    flex: 1,
    backgroundColor: '#757575',
    alignItems: 'center',
    paddingVertical: verticalScale(5),
    marginVertical: verticalScale(20),
  },
};

const ValidUntilBlock = ({ children }) => (
  <View style={ownStyles.container}>{children}</View>
);

export default ValidUntilBlock;
