// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { Entypo } from '@expo/vector-icons';
// $FlowFixMe
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from '../../../../../../styles/Scaling';

import type { TFunction } from '../../../../../../types/generalTypes';

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

export const DetailsIconInner = ({
  expanded,
  t,
}: DetailsIconProps & { t: TFunction }) => (
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
    <Text style={ownStyles.quantityText}>{t('details').toUpperCase()}</Text>
  </View>
);

export const DetailsIcon = (translate(['overview'])(
  DetailsIconInner
): ComponentType<DetailsIconProps>);
