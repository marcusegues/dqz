// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { moderateScale } from '../../../../../../styles/Scaling';
import * as colors from '../../../../../../styles/colors';

const ownStyles = {
  container: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E0E0E1',
  },
  rowContainer: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  rowChangeValueContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  quantity: {
    fontSize: moderateScale(28),
    fontFamily: 'roboto_regular',
    color: '#24253D',
  },
  image: {
    height: moderateScale(28),
    width: moderateScale(40),
  },
};

type PeopleInputRowProps = {
  onAdd: () => void,
  onSubtract: () => void,
  icon: any,
  displayedQuantity: number,
  children: any,
};

export const PeopleInputRow = ({
  onAdd,
  onSubtract,
  icon,
  displayedQuantity,
  children,
}: PeopleInputRowProps) => (
  <View style={ownStyles.container}>
    <View style={ownStyles.rowContainer}>
      <Image source={icon} style={ownStyles.image} resizeMode="contain" />
      {children.textComponent}
    </View>
    <View style={ownStyles.rowChangeValueContainer}>
      <TouchableOpacity onPress={onSubtract}>
        <Entypo
          name="circle-with-minus"
          size={moderateScale(28)}
          color={displayedQuantity ? colors.MAIN_RED : colors.LIGHT_GREY}
        />
      </TouchableOpacity>
      <Text style={ownStyles.quantity}>{displayedQuantity}</Text>
      <TouchableOpacity onPress={onAdd}>
        <Entypo
          name="circle-with-plus"
          size={moderateScale(28)}
          color={colors.MAIN_RED}
        />
      </TouchableOpacity>
    </View>
  </View>
);
