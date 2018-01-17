// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { Image, View, StyleSheet } from 'react-native';
import type { Children } from '../../../../types/generalTypes';
import { verticalScale } from '../../../../styles/Scaling';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
  <Touchable
    style={{
      width: '100%',
      // marginTop: 4,
      marginBottom: verticalScale(4),
    }}
    onPress={onAnswerCardPress}
  >
    <View style={styles.container}>
      <Image
        source={mainIcon}
        style={{
          width: 32,
          height: 32,
        }}
      />
      <View style={{ flex: 0.7 }}>{children}</View>
      <Image
        source={flag}
        style={{
          width: 32,
          height: 32,
        }}
      />
    </View>
  </Touchable>
);
