import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MAIN_RED } from '../../../../styles/colors';

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

const AnswerCard = ({ mainIcon, status, children, onAnswerPress }) => (
  <Touchable
    style={{
      height: 56,
      marginLeft: 2,
      marginRight: 2,
      marginTop: 5,
      marginBottom: 5,
      width: '95%',
    }}
    onPress={onAnswerPress}
  >
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={mainIcon}
        size={34}
        style={{}}
        color={MAIN_RED}
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
  </Touchable>
);

export default AnswerCard;
