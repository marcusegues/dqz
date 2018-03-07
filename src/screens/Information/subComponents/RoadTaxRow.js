// @flow
import React from 'react';
// $FlowFixMe
import { Image, View } from 'react-native';
import { CardRowText } from '../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { Row } from '../../../components/Rows/Row';
import { AmountIcon } from '../../../components/General Components/GreyBox/configured/AmountIcon';
import { AppInfoSubText } from '../../AppInfo/subComponents/AppInfoSubText';
import { scale } from '../../../styles/Scaling';

type RoadTaxRowProps = {
  borderTop?: boolean,
  // borderBottom?: boolean,
  // width?: string,
  // onLayout?: any => void,
  // children: Children,
  // styles?: Object,
  source: string,
  imageStyle: {},
  title: string,
  bus?: boolean,
};

export const RoadTaxRow = ({
  borderTop,
  // borderBottom,
  // width,
  // onLayout = () => {},
  // children,
  // styles,
  source,
  imageStyle,
  title,
  bus,
}: RoadTaxRowProps) => (
  <Row width="100%" borderTop={borderTop} bus={bus}>
    <View style={{ alignSelf: 'flex-start', width: '67%' }}>
      <CardRowText text={title} style={{ marginVertical: 16 }} />
    </View>
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <Image source={source} resizeMode="contain" style={imageStyle} />
      <AmountIcon amount={2} currency="CHF" />
      {bus ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <AppInfoSubText text="bis" style={{ marginRight: scale(13) }} />
          <AmountIcon amount={2} currency="CHF" />
        </View>
      ) : (
        undefined
        // <Text />
      )}
    </View>
  </Row>
);

RoadTaxRow.defaultProps = {
  borderTop: false,
  bus: false,
  // borderBottom: true,
  // width: '95%',
  // onLayout: () => {},
  // styles: {},
};
