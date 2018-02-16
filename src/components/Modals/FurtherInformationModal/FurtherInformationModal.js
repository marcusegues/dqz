// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
import { AppModal } from '../AppModal';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { PickerCard } from '../CurrencyPickerModal/subComponents/PickerCard';
import { scale, verticalScale } from '../../../styles/Scaling';
import { ModalCloseText } from '../ModalCloseText';
import type { TFunction } from '../../../types/generalTypes';

const ownStyles = {
  pickerCard: {
    width: '100%',
  },
  vatRateInfo: {
    color: '#757575',
    lineHeight: 18,
  },
  termsOfService: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
    fontFamily: 'roboto_medium',
    color: '#757575',
  },
  acceptanceContainer: {
    marginHorizontal: scale(16),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  acceptanceText: {
    color: '#4a4a4a',
    paddingRight: scale(16),
  },
};
type FurtherInformationModalProps = {
  modalVisible: boolean,
  toggleModalVisible: () => void,
};

export const FurtherInformationModalInner = ({
  t,
  modalVisible,
  toggleModalVisible,
}: FurtherInformationModalProps & { t: TFunction }) => (
  <AppModal
    modalVisible={modalVisible}
    animationIn="slideInUp"
    animationOut="slideOutDown"
  >
    <PickerCard style={ownStyles.pickerCard}>
      <CardHeader text={t('furtherInformationModal:furtherInformation')} />

      <CardHeaderSubText
        text={t('furtherInformationModal:acceptance')}
        style={ownStyles.vatRateInfo}
      />
    </PickerCard>
    <ModalCloseText
      onModalHide={toggleModalVisible}
      text={t('closeModalText')}
    />
  </AppModal>
);

export const FurtherInformationModal = (translate([
  'modal',
  'furtherInformationModal',
])(FurtherInformationModalInner): ComponentType<FurtherInformationModalProps>);
