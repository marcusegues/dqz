// @flow
import React from 'react';
// $FlowFixMe
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import type { Children } from '../../types/generalTypes';

const ownStyles = {
  container: {
    flex: 1,
    width: '100%',
    // width: '90%',
    alignSelf: 'center',
    marginBottom: 16,
  },
  scrollView: {
    width: '100%',
    borderColor: '#E0E0E1',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
};

type ScrollViewCardProps = {
  children: Children,
};

// needs to be stateful for the snapshot functionality
// eslint-disable-next-line react/prefer-stateless-function
export class ScrollViewCard extends React.Component<ScrollViewCardProps> {
  render() {
    return (
      <View style={ownStyles.container}>
        <ScrollView
          contentContainerStyle={[ownStyles.scrollView, globalStyles.boxShadow]}
        >
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}
