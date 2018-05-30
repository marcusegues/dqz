// @flow
import React from 'react';
// $FlowFixMe
import { TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SwipeableContent } from '../SwipeableContent';
import type { Children } from '../../../../types/generalTypes';
import { EDIT_BASKET_GREY, MAIN_RED, WHITE } from '../../../../styles/colors';

type SwipeToDeleteProps = {
  onPressDelete: Function,
  onPressEdit?: Function,
  editable?: boolean,
  children: Children,
};

export const SwipeToDelete = ({
  onPressDelete,
  onPressEdit,
  editable,
  children,
}: SwipeToDeleteProps) => {
  const rightSwipeButtons = editable
    ? [
        <TouchableHighlight
          style={{
            flex: 1,
            backgroundColor: EDIT_BASKET_GREY,
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingLeft: 30,
          }}
          onPress={onPressEdit}
        >
          <MaterialIcons name="edit" size={30} color={WHITE} />
        </TouchableHighlight>,
        <TouchableHighlight
          style={{
            flex: 1,
            backgroundColor: MAIN_RED,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 30,
          }}
          onPress={onPressDelete}
        >
          <MaterialIcons name="delete" size={30} color={WHITE} />
        </TouchableHighlight>,
      ]
    : [
        <TouchableHighlight
          style={{
            flex: 1,
            backgroundColor: MAIN_RED,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 30,
          }}
          onPress={onPressDelete}
        >
          <MaterialIcons name="delete" size={30} color={WHITE} />
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

SwipeToDelete.defaultProps = {
  onPressEdit: () => {},
  editable: false,
};
