import React from 'react';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../../../styles/globalStyles';

const ownStyles = {
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 16,
  },
  scrollView: {
    width: '100%',
    borderColor: '#E0E0E1',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
};

export const ScrollViewCard = ({ children }) => (
  <View style={ownStyles.container}>
    <ScrollView
      contentContainerStyle={[ownStyles.scrollView, globalStyles.boxShadow]}
    >
      {children}
    </ScrollView>
  </View>
);
