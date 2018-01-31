// @flow
import React from 'react';
// $FlowFixMe
import { TouchableWithoutFeedback, View } from 'react-native';
import { Row } from '../../../components/Rows/Row';
import { CardRowText } from '../../../components/QuestionAnswer/cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../../components/QuestionAnswer/cards/subcomponents/CardRowSubText';

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

type PeriodOfEntryRowProps = {
  title: string,
  subtitle: string,
  time: string,
  onPress: () => void,
};

export const PeriodOfEntryRow = ({
  title,
  subtitle,
  time,
  onPress,
}: PeriodOfEntryRowProps) => (
  <Row borderTop>
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={ownStyles.container}>
        <View style={ownStyles.textContainer}>
          <CardRowText text={title} style={{ paddingBottom: 3 }} />
          <CardRowSubText
            text={time}
            style={{ color: '#9b9b9b', fontFamily: 'roboto_light' }}
          />
          <CardRowSubText
            text={subtitle.toUpperCase()}
            style={{ color: '#757575', marginTop: 5 }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Row>
);
