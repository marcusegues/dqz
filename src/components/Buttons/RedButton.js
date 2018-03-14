// @flow
import React from 'react';
import debounce from 'lodash/debounce';
// $FlowFixMe
import { Text, View, Platform } from 'react-native';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import * as colors from './../../styles/colors';
import { verticalScale, moderateScale } from '../../styles/Scaling';

const ownStyles = disabled => ({
  bottomButtonContainer: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 3,
    backgroundColor: colors.MAIN_RED,
    borderColor: '#ddd',
    marginTop: verticalScale(16),
  },
  touchable: {
    flex: 1,
    backgroundColor: disabled ? 'lightgray' : colors.MAIN_RED,
    borderRadius: 3,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  touchableText: {
    fontSize: moderateScale(14),
    color: '#fff',
    alignSelf: 'center',
    fontFamily: 'roboto_medium',
    fontWeight: '500',
    paddingVertical: verticalScale(16),
  },
});

type RedButtonProps = {
  text: string,
  onPress: () => any,
  confirmationDisabled?: boolean,
  buttonStyle?: {},
};

export class RedButton extends React.Component<RedButtonProps> {
  static defaultProps = {
    confirmationDisabled: false,
    buttonStyle: {},
  };

  constructor(props: RedButtonProps) {
    super(props);
    // prevent that multiple clicks fire multiple calls of onPress
    this.debounced = debounce(this.props.onPress, 100, {
      leading: true,
      trailing: false,
    });
  }

  debounced: Function;

  render() {
    const { text, confirmationDisabled, buttonStyle } = this.props;

    return (
      <View style={ownStyles(confirmationDisabled).bottomButtonContainer}>
        <Touchable
          onPress={this.debounced}
          style={[
            ownStyles(confirmationDisabled).touchable,
            { ...buttonStyle },
          ]}
          disabled={confirmationDisabled}
        >
          <Text style={ownStyles(confirmationDisabled).touchableText}>
            {text.toUpperCase()}
          </Text>
        </Touchable>
      </View>
    );
  }
}
