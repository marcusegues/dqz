// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  // $FlowFixMe
} from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { AppModal } from '../AppModal';
import { RedButton } from '../../Buttons/RedButton';
import { ModalCard } from '../ModalCard';
import { CardHeader } from '../../QuestionAnswer/Cards/subcomponents/CardHeader';
import { CardHeaderSubText } from '../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';
import { Row } from '../../Rows/Row';
import { CardRowText } from '../../QuestionAnswer/Cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../QuestionAnswer/Cards/subcomponents/CardRowSubText';
import { GREY } from '../../../styles/colors';
import { CloseIcon } from '../../General Components/CloseIcon';
import type { TFunction } from '../../../types/generalTypes';
import { ModalCloseText } from '../ModalCloseText';
import { rowStyles } from '../../Rows/styles/rowStyles';
import { storeClearDeclaration } from '../../../asyncStorage/storageApi';
import { getTotalFees } from '../../../reducers/selectors';

const ownStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: scale(20),
  },
  redButtonWrapper: {
    width: '95%',
    alignSelf: 'center',
  },
});

export type NavigateFromSavedBasket = 'QuestionAnswer' | 'doNotNavigate';

type SavedBasketModalProps = {
  modalVisible: boolean,
  setModalVisibleFalse: (navigateTo: NavigateFromSavedBasket) => any,
};

type ReduxInject = {
  resetReduxDeclaration: () => void,
  totalFees: number,
};

class SavedBasketModalInner extends React.Component<
  SavedBasketModalProps & ReduxInject & { t: TFunction },
  null
> {
  async resetDeclaration() {
    const { setModalVisibleFalse, resetReduxDeclaration } = this.props;
    await storeClearDeclaration();
    resetReduxDeclaration();
    setModalVisibleFalse('QuestionAnswer');
  }

  render() {
    const { setModalVisibleFalse, modalVisible, t } = this.props;
    return (
      <AppModal
        onRequestClose={setModalVisibleFalse}
        modalVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <ModalCard style={{}}>
          <CloseIcon onPress={setModalVisibleFalse} />
          <CardHeader
            text={t('declareGoods')}
            style={{
              marginTop: 0,
            }}
          />
          <CardHeaderSubText
            text={t('modal:savedBasketDoYoWantToContinue')}
            style={{ lineHeight: moderateScale(18), marginBottom: 30 }}
          />

          <Row borderTop>
            <View style={rowStyles.rowContent}>
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.setModalVisibleFalse('QuestionAnswer');
                }}
              >
                <View style={ownStyles.container}>
                  <MaterialIcons
                    name="shopping-cart"
                    size={moderateScale(40)}
                    color={GREY}
                  />
                  <View style={ownStyles.textContainer}>
                    <CardRowText text={t('modal:savedBasket')} />
                    <CardRowSubText
                      text={t('modal:savedBasketTotalCost', {
                        value: this.props.totalFees.toFixed(2),
                      })}
                    />
                  </View>
                  <Entypo
                    name="chevron-right"
                    size={moderateScale(25)}
                    color="#24253D"
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </Row>

          <View style={ownStyles.redButtonWrapper}>
            <RedButton
              text={t('modal:savedBasketNewShoppingCart')}
              onPress={() => this.resetDeclaration()}
            />
          </View>
        </ModalCard>
        <ModalCloseText
          onModalHide={() => setModalVisibleFalse('doNotNavigate')}
          text={t('modal:closeModalText')}
        />
      </AppModal>
    );
  }
}

const mapStateToProps = state => ({
  totalFees: getTotalFees(state),
});

const mapDispatchToProps = dispatch => ({
  resetReduxDeclaration: () => dispatch({ type: 'RESET_DECLARATION' }),
});

export const SavedBasketModal = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['general', 'modal'])(SavedBasketModalInner)
): ComponentType<SavedBasketModalProps>);
