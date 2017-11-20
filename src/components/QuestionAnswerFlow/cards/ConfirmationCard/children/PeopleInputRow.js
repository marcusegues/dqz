import React from 'react';
import { View, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as fromModelApi from '../../../../../model/configurationApi';

class PeopleInputRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      people,
      onAdd,
      onSubtract,
      icon,
      displayedQuantity,
      children,
    } = this.props;
    return (
      <View
        style={{
          height: 71,
          width: 335,
          flexDirection: 'row',
          alignItems: 'center',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: `rgb(88, 88, 88)`,
        }}
      >
        <MaterialCommunityIcons name={icon} size={32} color="#DC0018" />
        {children.textComponent}
        <Touchable onPress={onSubtract}>
          <Entypo name="circle-with-minus" size={32} color="#DC0018" />
        </Touchable>
        <Text>{displayedQuantity}</Text>
        <Touchable onPress={onAdd}>
          <Entypo name="circle-with-plus" size={32} color="#DC0018" />
        </Touchable>
      </View>
    );
  }
}

export default PeopleInputRow;
