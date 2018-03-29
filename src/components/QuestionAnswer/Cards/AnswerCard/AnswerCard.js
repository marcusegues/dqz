// @flow
import React from 'react';
// $FlowFixMe
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import type { Children } from '../../../../types/generalTypes';
import { globalStyles } from '../../../../styles/globalStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 2,
  },
});

type AnswerCardProps = {
  mainIcon: any,
  flag: any,
  children: Children,
  onAnswerCardPress: () => void,
};

export const AnswerCard = ({
  mainIcon,
  flag,
  children,
  onAnswerCardPress,
}: AnswerCardProps) => (
  <TouchableOpacity
    style={{
      width: '100%',
    }}
    onPress={onAnswerCardPress}
  >
    <View style={[styles.container, globalStyles.boxShadow]}>
      <Image
        source={mainIcon}
        style={{
          width: 60,
          height: 60,
        }}
      />
      <View style={{ flex: 0.7 }}>{children}</View>
      <Image
        source={flag}
        style={{
          width: 29,
          height: 29,
        }}
      />
    </View>
  </TouchableOpacity>
);
