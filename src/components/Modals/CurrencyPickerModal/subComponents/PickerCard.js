import React from 'react';
import { View } from 'react-native';
import globalStyles from '../../../../styles/globalStyles';

const ownStyles = {
  modalContainer: {
    top: '25%',
    paddingBottom: 16,
    width: '85%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#FFF',
  },
};

const ModalContainer = ({ children, style }) => (
  <View
    style={[ownStyles.modalContainer, globalStyles.boxShadow, { ...style }]}
  >
    {children}
  </View>
);

export default ModalContainer;
