// @flow
import React from 'react';
// $FlowFixMe
import { TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SwipeableContent } from '../SwipeableContent';
import type { Children } from '../../../../types/generalTypes';

type SwipeToDeleteProps = {
  onPressDelete: Function,
  children: Children,
};

export const SwipeToDelete = ({
  onPressDelete,
  children,
}: SwipeToDeleteProps) => {
  const rightSwipeButtons = [
    <TouchableHighlight
      style={{
        flex: 1,
        backgroundColor: 'rgb(217,10,35)',
        justifyContent: 'center',
      }}
      onPress={onPressDelete}
    >
      <Ionicons
        name="md-trash"
        size={30}
        style={{ color: 'white', paddingLeft: 35 }}
      />
    </TouchableHighlight>,
  ];

  return (
    <SwipeableContent
      rightSwipeButtons={rightSwipeButtons}
      rightButtonWidth={90}
    >
      {children}
    </SwipeableContent>
  );
};
