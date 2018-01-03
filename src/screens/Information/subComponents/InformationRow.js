import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Row from '../../../components/Rows/Row';
import CardRowText from '../../../components/QuestionAnswer/cards/subcomponents/CardRowText';
import CardRowSubText from '../../../components/QuestionAnswer/cards/subcomponents/CardRowSubText';
import GreySquare from './GreySquare';
import RightChevronIcon from '../../../components/General Components/RightChevronIcon';

const ownStyles = {
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 1,
  },
};

const InformationRow = ({ mainText, subText, number, rowOnPress }) => (
  <Row>
    <TouchableWithoutFeedback onPress={rowOnPress}>
      <View style={ownStyles.container}>
        <GreySquare number={number} />
        <View style={ownStyles.textContainer}>
          <CardRowText text={mainText} style={{ paddingBottom: 3 }} />
          <CardRowSubText text={subText} />
        </View>
        <RightChevronIcon />
      </View>
    </TouchableWithoutFeedback>
  </Row>
);

export default InformationRow;
