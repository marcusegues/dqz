import React from 'react';
import { View, Text, Image } from 'react-native';
import ownStyles from './AppTitleStyles';

const img = require('../../../assets/icons/logo.png');

const AppTitle = () => (
  <View style={ownStyles.appTitle}>
    <Image source={img} style={ownStyles.logo} resizeMode="contain" />
    <View style={ownStyles.titleWrapper}>
      <Text style={ownStyles.appTitleWe}>We</Text>
      <Text style={ownStyles.appTitleDeclare}>Declare</Text>
    </View>
  </View>
);

export default AppTitle;
