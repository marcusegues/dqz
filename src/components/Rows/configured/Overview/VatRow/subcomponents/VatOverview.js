// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { OverviewInfo } from '../../subcomponents/OverviewInfo';
import { TotalOwed } from '../../subcomponents/TotalOwed';
import { AmountIcon } from '../../../../../General Components/GreyBox/configured/AmountIcon';
import { Row } from '../../../../Row';
import { rowStyles } from '../../../../styles/rowStyles';
import { DetailsIcon } from './DetailsIcon';
import type { TFunction } from '../../../../../../types/generalTypes';

type VatOverviewProps = {
  amount: number,
  vat: number,
};

type CollapsibleInjected = {
  setMainHeight: (height: number) => void,
  animate: () => void,
  expanded: boolean,
};

const VatOverviewInner = ({
  amount,
  vat,
  t,
  setMainHeight,
  animate,
  expanded,
}: VatOverviewProps & CollapsibleInjected & { t: TFunction }) => (
  <Row
    borderTop
    borderBottom={false}
    fullWidth
    onLayout={event => {
      setMainHeight(event.nativeEvent.layout.height);
    }}
  >
    <View style={[rowStyles.rowContent]}>
      <OverviewInfo title={t('amountsTitle')} subtitle={t('amountsSubtitle')}>
        <Touchable onPress={() => animate()}>
          <DetailsIcon expanded={expanded} />
        </Touchable>
      </OverviewInfo>
      <AmountIcon amount={amount} currency="CHF" />
      <TotalOwed result={(+vat).toFixed(2)} />
    </View>
  </Row>
);

export const VatOverview = (translate(['receipt'])(
  VatOverviewInner
): ComponentType<VatOverviewProps>);
