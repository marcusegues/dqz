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
  large: boolean,
  totalAmount: number,
  amountsPresent: boolean,
  vat: number,
};

type CollapsibleInjected = {
  setMainHeight: (height: number) => void,
  animate: () => void,
  expanded: boolean,
};

const VatOverviewInner = ({
  large,
  totalAmount,
  amountsPresent,
  vat,
  t,
  setMainHeight,
  animate,
  expanded,
}: VatOverviewProps & CollapsibleInjected & { t: TFunction }) => {
  const title = large ? t('largeAmountsTitle') : t('normalAmountsTitle');
  const subTitle = large
    ? t('largeAmountsSubtitle')
    : t('normalAmountsSubtitle');
  return (
    <Row
      borderTop={false}
      borderBottom={false}
      width="100%"
      onLayout={event => {
        setMainHeight(event.nativeEvent.layout.height);
      }}
    >
      <View style={[rowStyles.rowContent]}>
        <OverviewInfo title={title} subtitle={subTitle}>
          {amountsPresent ? (
            <Touchable onPress={() => animate()}>
              <DetailsIcon expanded={expanded} />
            </Touchable>
          ) : null}
        </OverviewInfo>
        <AmountIcon amount={totalAmount} currency="CHF" />
        {large ? (
          <View style={{ width: 70 }} />
        ) : (
          <TotalOwed result={(+vat).toFixed(2)} />
        )}
      </View>
    </Row>
  );
};

export const VatOverview = (translate(['receipt'])(
  VatOverviewInner
): ComponentType<VatOverviewProps>);
