import React from 'react';
// $FlowFixMe
import { Button, View, Text } from 'react-native';
import { OverviewInfo } from '../../subcomponents/OverviewInfo';
import { AllowanceIcon } from '../../DutyRow/subcomponents/AllowanceIcon';
import { TotalOwed } from '../../subcomponents/TotalOwed';
import { AmountIcon } from '../../../../../General Components/GreyBox/configured/AmountIcon';
import { translate } from 'react-i18next';
import Touchable from 'react-native-platform-touchable';
import { Row } from '../../../../Row';
import { rowStyles } from '../../../../styles/rowStyles';
import { VatAmountList } from './VatAmountList';
import { DetailsIcon } from './DetailsIcon';

class VatOverviewInner extends React.Component {
  render() {
    const { amount, vat, t } = this.props;
    return (
      <Row
        borderTop
        borderBottom={false}
        fullWidth
        onLayout={event => {
          console.log('Set min height', event.nativeEvent.layout.height);
          this.props.setMainHeight(event.nativeEvent.layout.height);
        }}
      >
        <View style={[rowStyles.rowContent]}>
          <OverviewInfo
            title={t('amountsTitle')}
            subtitle={t('amountsSubtitle')}
          >
            <Touchable onPress={() => this.props.animate()}>
              <DetailsIcon expanded={this.props.expanded} />
            </Touchable>
          </OverviewInfo>
          <AmountIcon amount={amount} currency="CHF" />
          <TotalOwed result={(+vat).toFixed(2)} />
        </View>
      </Row>
    );
  }
}

export const VatOverview = (translate(['receipt'])(
  VatOverviewInner
): ComponentType<VatRowProps>);
