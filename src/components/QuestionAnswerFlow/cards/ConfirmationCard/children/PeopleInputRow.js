import React from 'react';
import { View, Text } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as fromModelApi from '../../../../../model/configurationApi';
import { moderateScale } from '../../../../../styles/Scaling';

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
          // flex: 0.3,
          // height: 71,
          // width: 335,
          width: '95%',
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          borderColor: '#E0E0E1',
        }}
      >
        <View
          style={{
            flex: 0.65,
            // borderWidth: 1,
            // borderColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 16,
          }}
        >
          <MaterialCommunityIcons
            name={icon}
            size={moderateScale(32)}
            color="#DC0018"
          />
          {children.textComponent}
        </View>
        <View
          style={{
            flex: 0.35,
            // borderWidth: 1,
            // borderColor: 'green',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingVertical: 16,
          }}
        >
          <Touchable onPress={onSubtract}>
            <Entypo
              name="circle-with-minus"
              size={moderateScale(28)}
              color="#DC0018"
            />
          </Touchable>
          <Text
            style={{
              fontSize: moderateScale(28),
              fontFamily: 'roboto_regular',
              color: '#24253D',
            }}
          >
            {displayedQuantity}
          </Text>
          <Touchable onPress={onAdd}>
            <Entypo
              name="circle-with-plus"
              size={moderateScale(28)}
              color="#DC0018"
            />
          </Touchable>
        </View>
      </View>
    );
  }
}

export default PeopleInputRow;
