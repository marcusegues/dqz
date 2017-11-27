import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import Touchable from 'react-native-platform-touchable';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import * as fromModelApi from '../../../../../model/configurationApi';
import { moderateScale } from '../../../../../styles/Scaling';
import * as colors from '../../../../../styles/colors';

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
      <View style={ownStyles.container}>
        <View style={ownStyles.rowContainer}>
          <MaterialCommunityIcons
            name={icon}
            size={moderateScale(32)}
            color={colors.MAIN_RED}
          />
          {children.textComponent}
        </View>
        <View style={ownStyles.rowChangeValueContainer}>
          <TouchableOpacity onPress={onSubtract}>
            <Entypo
              name="circle-with-minus"
              size={moderateScale(28)}
              color={colors.LIGHT_GREY}
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
  }
}

export default PeopleInputRow;

const ownStyles = {
  container: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
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
};
