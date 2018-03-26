// @flow
import React from 'react';
// $FlowFixMe
import { TouchableWithoutFeedback, View } from 'react-native';
import { Row } from '../../../components/Rows/Row';
import { CardRowText } from '../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { InformationRowIcon } from './InformationRowIcon';
import { RightChevronIcon } from '../../../components/General Components/RightChevronIcon';

const ownStyles = {
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 1,
  },
};

type InformationRowProps = {
  mainText: string,
  source: string,
  rowOnPress: () => void,
  borderTop?: boolean,
  borderBottom?: boolean,
};

export const InformationRow = ({
  mainText,
  source,
  rowOnPress,
  borderTop = false,
  borderBottom = false,
}: InformationRowProps) => (
  <Row borderTop={borderTop} borderBottom={borderBottom}>
    <TouchableWithoutFeedback onPress={rowOnPress}>
      <View style={ownStyles.container}>
        <InformationRowIcon source={source} />
        <View style={ownStyles.textContainer}>
          <CardRowText text={mainText} style={{}} />
        </View>
        <RightChevronIcon />
      </View>
    </TouchableWithoutFeedback>
  </Row>
);

InformationRow.defaultProps = {
  borderTop: false,
  borderBottom: false,
};
