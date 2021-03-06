// @flow
import React from 'react';
// $FlowFixMe
import Modal from 'react-native-modal';

import type { Children } from '../../types/generalTypes';

type AppModalProps = {
  modalVisible: boolean,
  children: Children,
  animationIn: string,
  animationOut: string,
  onDismiss?: () => any,
};

export const AppModal = ({
  modalVisible,
  children,
  animationIn,
  animationOut,
  onDismiss,
}: AppModalProps) => (
  <Modal
    style={{}}
    isVisible={modalVisible}
    onRequestClose={() => {}}
    backdropColor="black"
    backdropOpacity={0.8}
    animationIn={animationIn}
    animationOut={animationOut}
    animationInTiming={400}
    animationOutTiming={400}
    backdropTransitionInTiming={400}
    backdropTransitionOutTiming={400}
    onDismiss={onDismiss}
  >
    {children}
  </Modal>
);

AppModal.defaultProps = {
  onDismiss: () => {},
};
