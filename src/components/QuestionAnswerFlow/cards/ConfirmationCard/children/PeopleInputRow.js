import React from 'react';
import { View, Text } from 'react-native';

class PeopleInputRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: `rgb(0.88, 0.88, 0.88)`,
        }}
      >
        <Text>{`Hello`}</Text>
      </View>
    );
  }
}

export default PeopleInputRow;
