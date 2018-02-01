// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { Card } from '../QuestionAnswer/cards/Card';
import { CardHeader } from '../QuestionAnswer/cards/subcomponents/CardHeader';
import { getTotalQuantity } from '../../model/configurationApi';
import { DutyRow } from './subcomponents/DutyRow';
import { CardRowSubText } from '../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { CardRowText } from '../QuestionAnswer/cards/subcomponents/CardRowText';
import { getMainCategory } from '../../types/reducers/appReducer';
import type { Basket } from '../../model/types/basketPeopleAmountsTypes';
import { ReceiptSubText } from '../Receipts/subComponents/ReceiptSubText';
import { VatRow } from './subcomponents/VatRow';
import { moderateScale, verticalScale } from '../../styles/Scaling';
import type { TFunction } from '../../types/generalTypes';
import type { DutyReport, VatReport } from '../../model/types/calculationTypes';
import { PeriodOfEntryRow } from './subcomponents/PeriodOfEntryRow';
import { TimePickerModal } from '../Modals/TimePickerModal/TimePickerModal';
import { getReceiptEntryTime } from '../../reducers';
import { getConvertedLocalTimeToSwiss } from '../../model/utils';

type OverviewProps = {
  dutyReport: DutyReport,
  vatReport: VatReport,
  basket: Basket,
  modalVisible?: boolean,
};

type ReduxInjectedProps = {
  setReceiptEntryTime: (receiptEntryTime: string) => void,
  receiptEntryTime: string,
};

type OverviewState = {
  modalVisible: boolean,
};

const ownStyles = {
  cardRowTextSum: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(35),
  },
  receiptSubTextVat: {
    fontSize: moderateScale(12),
    alignSelf: 'flex-end',
    marginTop: verticalScale(25),
  },
};

class OverviewInner extends React.Component<
  OverviewProps & { t: TFunction } & ReduxInjectedProps,
  OverviewState
> {
  static defaultProps = {
    modalVisible: false,
  };

  constructor(props: OverviewProps & ReduxInjectedProps & { t: TFunction }) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible || false,
    };
  }

  componentDidMount() {
    const { receiptEntryTime } = this.props;
    if (receiptEntryTime === '')
      this.props.setReceiptEntryTime(getConvertedLocalTimeToSwiss().toString());
  }

  handleShowModal() {
    this.setState({ modalVisible: true });
  }

  handleHideModal() {
    this.setState({
      modalVisible: false,
    });
  }

  handleSetReceiptEntryTime(entryTime: string) {
    this.props.setReceiptEntryTime(entryTime);
  }

  render() {
    const { dutyReport, vatReport, basket, t, receiptEntryTime } = this.props;
    const fullVat = vatReport.get('totalVat');
    const fullDuty = dutyReport.get('totalDuty');
    const momentReceiptEntryTime =
      receiptEntryTime !== ''
        ? DateTime.fromISO(receiptEntryTime, {
            zone: 'Europe/Zurich',
          }).toFormat('dd.MM.y HH:mm')
        : getConvertedLocalTimeToSwiss().toFormat('dd.MM.y HH:mm');
    return (
      <Card>
        <CardHeader text={t('overViewTitle')} />
        <View
          style={{ alignSelf: 'flex-end', marginRight: 16, marginBottom: 2 }}
        >
          <CardRowSubText text={t('dutyColumn')} />
        </View>
        <View style={{ flex: 1, width: '100%' }}>
          {dutyReport
            .get('dutyByCategoryRaw')
            .entrySeq()
            .filter(entry => getTotalQuantity(basket, entry[0]) > 0)
            .map(([category, dutyOfCategory], idx) => (
              <DutyRow
                borderTop={idx === 0}
                key={category}
                mainCategory={getMainCategory(category)}
                category={category}
                quantity={getTotalQuantity(basket, category)}
                duty={dutyOfCategory}
              />
            ))}

          <View
            style={{ alignSelf: 'flex-end', marginRight: 16, marginBottom: 2 }}
          >
            <ReceiptSubText
              text={t('receipt:vatColumn')}
              style={ownStyles.receiptSubTextVat}
            />
          </View>

          <View style={{ flex: 1, width: '100%' }}>
            <VatRow
              quantity={`~${vatReport.get('totalAmountsApprox')}`}
              vat={vatReport.get('totalVat')}
            />
          </View>

          <PeriodOfEntryRow
            title={t('receipt:entryTime')}
            subtitle={t('receipt:chooseOtherEntryTime')}
            time={momentReceiptEntryTime}
            onPress={() => this.handleShowModal()}
          />

          <View
            style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 16 }}
          >
            <CardRowText
              text={t('receipt:sumText', {
                value: (fullVat + fullDuty).toFixed(2),
              })}
              style={ownStyles.cardRowTextSum}
            />
          </View>
        </View>
        <TimePickerModal
          modalVisible={this.state.modalVisible}
          onHideModal={() => this.handleHideModal()}
          onSelectTime={entryTime => this.handleSetReceiptEntryTime(entryTime)}
        />
      </Card>
    );
  }
}

OverviewInner.defaultProps = {
  modalVisible: false,
};

const mapStateToProps = state => ({
  receiptEntryTime: getReceiptEntryTime(state),
});

const mapDispatchToProps = dispatch => ({
  setReceiptEntryTime: (receiptEntryTime: string) =>
    dispatch({ type: 'SET_RECEIPT_ENTRY_TIME', receiptEntryTime }),
});

export const Overview = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['payment', 'receipt', 'mainCategories', 'categories'])(
    OverviewInner
  )
): ComponentType<OverviewProps>);
