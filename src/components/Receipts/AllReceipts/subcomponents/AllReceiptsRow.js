// @flow
import React from 'react';
// $FlowFixMe
import { TouchableWithoutFeedback, View } from 'react-native';
import { Row } from '../../../Rows/Row';
import { CardRowText } from '../../../QuestionAnswer/Cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../../QuestionAnswer/Cards/subcomponents/CardRowSubText';
import { RightChevronIcon } from '../../../General Components/RightChevronIcon';
import { rowStyles } from '../../../Rows/styles/rowStyles';

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
  borderTop?: boolean,
};

export const AllReceiptsRow = ({
  sum,
  duty,
  date,
  rowOnPress,
  borderTop,
}: AllReceiptsRowProps) => (
  <Row borderTop={borderTop}>
    <TouchableWithoutFeedback onPress={rowOnPress}>
      <View style={[rowStyles.rowContent]}>
        <View style={ownStyles.container}>
          <View style={ownStyles.textContainer}>
            <CardRowText text={sum} style={{ paddingBottom: 3 }} />
            <CardRowSubText text={duty} />
            <CardRowSubText text={date} style={{ color: '#1A1A1A' }} />
          </View>
          <RightChevronIcon />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Row>
);

AllReceiptsRow.defaultProps = {
  borderTop: false,
};
