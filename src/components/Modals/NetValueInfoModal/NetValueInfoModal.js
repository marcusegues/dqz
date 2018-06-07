// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { ModalCard } from '../ModalCard';
import { ModalCloseText } from '../ModalCloseText';
import type { TFunction } from '../../../types/generalTypes';
import { BASE_GREY } from '../../../styles/colors';

const ownStyles = {
  pickerCard: {
    width: '100%',
  },
  text: {
    color: BASE_GREY,
    lineHeight: 20,
    marginTop: 16,
  },
};
type NetValueInfoModalInnerProps = {
  modalVisible: boolean,
  toggleModalVisible: () => void,
};

export const NetValueInfoModalInner = ({
  t,
  modalVisible,
  toggleModalVisible,
}: NetValueInfoModalInnerProps & { t: TFunction }) => (
  <AppModal
    modalVisible={modalVisible}
    animationIn="slideInLeft"
    animationOut="slideOutLeft"
  >
    <ModalCard style={ownStyles.pickerCard}>
      <CardHeaderSubText
        text={t('netValueInfoModal:mainText')}
        style={ownStyles.text}
      />
    </ModalCard>
    <ModalCloseText
      onModalHide={toggleModalVisible}
      text={t('closeModalText')}
    />
  </AppModal>
);

export const NetValueInfoModal = (translate(['modal', 'netValueInfoModal'])(
  NetValueInfoModalInner
): ComponentType<NetValueInfoModalInnerProps>);
