// @flow
import React from 'react';
// $FlowFixMe
import {
  TouchableOpacity,
  View,
  // $FlowFixMe
} from 'react-native';
import { Row } from '../../../components/Rows/Row';
import { CardRowText } from '../../QuestionAnswer/Cards/subcomponents/CardRowText';
import { CardRowSubText } from '../../QuestionAnswer/Cards/subcomponents/CardRowSubText';
import * as colors from '../../../styles/colors';
import { rowStyles } from '../../Rows/styles/rowStyles';
import { moderateScale } from '../../../styles/Scaling';

const ownStyles = {
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    paddingRight: 4,
    marginVertical: 4,
  },
  rowContainer: {
    backgroundColor: '#757575',
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 4,
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
  <Row borderBottom={false}>
    <View style={[rowStyles.rowContent, ownStyles.rowContainer]}>
      <View style={ownStyles.textContainer}>
        <CardRowText text={title} style={{ paddingBottom: 3, color: '#fff' }} />
        <CardRowSubText
          text={time}
          style={{ color: '#fff', fontFamily: 'roboto_light' }}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={ownStyles.button}>
          <CardRowSubText
            text={subtitle.toUpperCase()}
            style={{
              color: colors.MAIN_RED,
              fontFamily: 'roboto_medium',
              fontSize: moderateScale(14),
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  </Row>
);
