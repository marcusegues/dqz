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
import { rowStyles } from '../../Rows/styles/rowStyles';
import { moderateScale } from '../../../styles/Scaling';
import { size, type } from '../../../styles/fonts';
import {
  BASE_LIGHT_GREY,
  MAIN_BLACK,
  MAIN_RED,
  WHITE,
} from '../../../styles/colors';

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
    backgroundColor: BASE_LIGHT_GREY,
    marginHorizontal: 8,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: MAIN_RED,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 5,
    justifyContent: 'center',
    borderRadius: 3,
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
        <CardRowText
          text={title}
          style={{ paddingBottom: 10, paddingTop: 5, color: MAIN_BLACK }}
        />
        <CardRowSubText
          text={time}
          style={{
            color: MAIN_BLACK,
            fontSize: size.header,
            fontFamily: type.regular,
          }}
        />
        <TouchableOpacity onPress={onPress}>
          <View style={ownStyles.button}>
            <CardRowSubText
              text={subtitle.toUpperCase()}
              style={{
                color: WHITE,
                fontFamily: type.medium,
                fontSize: moderateScale(size.medium),
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </Row>
);
