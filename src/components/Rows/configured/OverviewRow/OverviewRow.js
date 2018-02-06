// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { CardRowSubText } from '../../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { CardRowText } from '../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { Row } from '../../Row';

type OverviewRowProps = {
  title: string,
  subtitle: string,
  result: string,
  borderTop?: boolean,
  children: { lowerIcon: any, midComponent: any },
};

const OverviewRowInner = ({
  title,
  subtitle,
  result,
  borderTop,
  children,
}: OverviewRowProps) => (
    <Row borderTop={borderTop}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingRight: 5,
        }}
      >
        <CardRowText text={title} />
        <CardRowSubText text={subtitle} />
        {children && children.lowerIcon}
      </View>
      <View>{children && children.midComponent}</View>
      <View
        style={{ width: 70, flexDirection: 'row', justifyContent: 'flex-end' }}
      >
        <CardRowText text={result} />
      </View>
    </Row>
  );

OverviewRowInner.defaultProps = {
  borderTop: false,
};

export const OverviewRow = (translate(['receipt'])(
  OverviewRowInner
): ComponentType<{}>);
