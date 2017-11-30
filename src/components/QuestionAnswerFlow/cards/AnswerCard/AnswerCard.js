import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as colors from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    elevation: 3,
    marginHorizontal: 2,
    marginBottom: 3,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

const AnswerCard = ({ mainIcon, status, children }) => (
  <View style={styles.container}>
    <MaterialCommunityIcons
      name={mainIcon}
      size={34}
      style={{}}
      color={colors.MAIN_RED}
    />
    <View style={{ flex: 0.7 }}>{children}</View>
    <Image
      source={status}
      style={{
        width: 32,
        height: 32,
      }}
    />
  </View>
);

export default AnswerCard;
