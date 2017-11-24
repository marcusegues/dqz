import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AnswerCard = ({ mainIcon, status, children }) => (
  <View style={styles.container}>
    <MaterialCommunityIcons
      name={mainIcon}
      size={34}
      style={{}}
      color="#9B9B9B"
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

const styles = StyleSheet.create({
  container: {
    flex: 0.12,
    height: 343,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 2,
    elevation: 3,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
});
