// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../../../../../styles/Scaling';
import { Entypo } from '@expo/vector-icons';

const ownStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityText: {
    color: '#757575',
    fontSize: moderateScale(12),
    fontFamily: 'roboto_bold',
  },
});

type DetailsIconProps = {
  expanded: boolean,
};

export const DetailsIcon = ({ expanded }: DetailsIconProps) => (
  <View style={ownStyles.container}>
    <View style={{ marginLeft: -5 }}>
      {expanded ? (
        <Entypo
          name="chevron-small-down"
          size={moderateScale(20)}
          color="#757575"
        />
      ) : (
        <Entypo
          name="chevron-small-right"
          size={moderateScale(20)}
          color="#757575"
        />
      )}
    </View>
    <Text style={ownStyles.quantityText}>{'DETAILS'}</Text>
  </View>
);
