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
import type {
  Navigation,
  PaymentData,
  TFunction,
} from '../../../types/generalTypes';
import { ModalCloseText } from '../ModalCloseText';
import { rowStyles } from '../../Rows/styles/rowStyles';
import {
  fetchAmounts,
  fetchBasket,
  fetchMainCategories,
  fetchPaymentData,
  fetchPeople,
  storeClearDeclaration,
} from '../../../asyncStorage/storageApi';
import type {
  Amounts,
  Basket,
  People,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { MainCategories } from '../../../types/reducers/declaration';

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
  resetDeclaration: () => void,
  setDeclaration: ({
    basket: Basket,
    people: People,
    amounts: Amounts,
    mainCategories: MainCategories,
    paymentData: PaymentData,
  }) => void,
};

class SavedBasketModalInner extends React.Component<
  SavedBasketModalProps & ReduxInject & { t: TFunction },
  null
> {
  async storeClearDeclaration() {
    const { setModalVisibleFalse, resetDeclaration } = this.props;
    await storeClearDeclaration();
    resetDeclaration();
    setModalVisibleFalse('QuestionAnswer');
  }

  componentDidMount() {
    Promise.all([
      fetchBasket(),
      fetchPeople(),
      fetchAmounts(),
      fetchMainCategories(),
      fetchPaymentData(),
    ]).then(data => {
      this.props.setDeclaration({
        basket: data[0],
        people: data[1],
        amounts: data[2],
        mainCategories: data[3],
        paymentData: data[4],
      });
    });
  }

  render() {
    const { setModalVisibleFalse, modalVisible, t } = this.props;
    return (
      <AppModal
        onRequestClose={setModalVisibleFalse}
        modalVisible={modalVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
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
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={ownStyles.container}>
                  <MaterialIcons
                    name="shopping-cart"
                    size={moderateScale(40)}
                    color={GREY}
                  />
                  <View style={ownStyles.textContainer}>
                    <CardRowText text="21. November 2017" />
                    <CardRowSubText
                      text={t('modal:savedBasketTotalCost', { value: '6.00' })}
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
              onPress={() => this.storeClearDeclaration()}
            />
          </View>
        </ModalCard>
        <ModalCloseText
          onModalHide={setModalVisibleFalse}
          text={t('modal:closeModalText')}
        />
      </AppModal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetDeclaration: () => dispatch({ type: 'RESET_DECLARATION' }),
  setDeclaration: ({ basket, people, amounts, mainCategories, paymentData }) =>
    dispatch({
      type: 'SET_DECLARATION',
      basket,
      people,
      amounts,
      mainCategories,
      paymentData,
    }),
});

export const SavedBasketModal = (connect(null, mapDispatchToProps)(
  translate(['general', 'modal'])(SavedBasketModalInner)
): ComponentType<SavedBasketModalProps>);
