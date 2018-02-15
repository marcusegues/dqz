// @flow
import React from 'react';
// $FlowFixMe
import { TouchableWithoutFeedback, View } from 'react-native';
import { Row } from '../../../Rows/Row';
import { CardRowText } from '../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { RightChevronIcon } from '../../../General Components/RightChevronIcon';

const ownStyles = {
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    paddingRight: 1,
  },
};

type AllReceiptsRowProps = {
  sum: string,
  duty: string,
  date: string,
  rowOnPress: () => void,
};

export const AllReceiptsRow = ({
  sum,
  duty,
  date,
  rowOnPress,
}: AllReceiptsRowProps) => (
  <Row borderTop>
    <TouchableWithoutFeedback onPress={rowOnPress}>
      <View style={ownStyles.container}>
        <View style={ownStyles.textContainer}>
          <CardRowText text={sum} style={{ paddingBottom: 3 }} />
          <CardRowSubText text={duty} />
          <CardRowSubText text={date} style={{ color: '#1A1A1A' }} />
        </View>
        <RightChevronIcon />
      </View>
    </TouchableWithoutFeedback>
  </Row>
);
