import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const HeaderTitle = ({ text }) => (
  <Text
    style={{
      fontSize: 24,
      color: '#1A1A1A',
      fontFamily: 'roboto_regular',
      fontWeight: '300',
    }}
  >
    {text}
  </Text>
);

export const MainScreenHeaderTitle = () => (
  <Text
    style={{
      fontSize: 24,
      color: '#1A1A1A',
      fontFamily: 'roboto_bold',
    }}
  >
    We
    <Text
      style={{
        fontSize: 24,
        color: '#1A1A1A',
        fontFamily: 'roboto_regular',
        fontWeight: '300',
      }}
    >
      Declare
    </Text>
  </Text>
);

export const HeaderLeft = () => (
  <Image
    source={require('../../../assets/images/logo.png')}
    resizeMode="contain"
    style={{ width: 30, height: 30 }}
  />
);

export const HeaderLeftBack = () => (
  <Image
    source={require('../../../assets/images/logo.png')}
    resizeMode="contain"
    style={{ width: 30, height: 30 }}
  />
);

export const HeaderRight = () => (
  <TouchableOpacity
    onPress={() => {
      // navigation.navigate('DrawerToggle');
    }}
  >
    <Ionicons name="ios-menu" size={30} style={{}} />
  </TouchableOpacity>
);
