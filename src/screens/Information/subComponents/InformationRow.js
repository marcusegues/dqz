import React from 'react';
import { View } from 'react-native';
import Row from '../../../components/Rows/Row';
import CardRowText from '../../../components/QuestionAnswer/cards/subcomponents/CardRowText';
import CardRowSubText from '../../../components/QuestionAnswer/cards/subcomponents/CardRowSubText';
import GreySquare from './GreySquare';
import RightChevronIcon from '../../../components/General Components/RightChevronIcon';

const InformationRow = ({ children, mainText, subText, number }) => (
  <Row>
    <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
      <GreySquare number={number} />
      <View
        style={{
          flexDirection: 'column',
          borderWidth: 1,
          flex: 1,
          justifyContent: 'flex-start',
          paddingLeft: 16,
        }}
      >
        <CardRowText text={mainText} style={{ paddingBottom: 5 }} />
        <CardRowSubText text={subText} />
      </View>
      <RightChevronIcon />
    </View>
  </Row>
);

export default InformationRow;
