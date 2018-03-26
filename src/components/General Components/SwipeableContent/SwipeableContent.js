// @flow
import React from 'react';
// $FlowFixMe
import Swipeable from 'react-native-swipeable';
import type { Children } from '../../../types/generalTypes';

type SwipeableContentProps = {
  rightSwipeButtons: Array<React$Element<any>>,
  rightButtonWidth: number,
  children: Children,
};

export const SwipeableContent = ({
  rightSwipeButtons,
  rightButtonWidth,
  children,
}: SwipeableContentProps) => (
  <Swipeable
    rightButtons={rightSwipeButtons}
    rightButtonWidth={rightButtonWidth}
    style={{ overflow: 'hidden' }}
  >
    {children}
  </Swipeable>
);
