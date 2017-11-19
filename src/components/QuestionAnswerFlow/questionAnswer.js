import React from 'react';
import { View, Text } from 'react-native';
import BinaryQuestion from '../BinaryQuestion';
import AnswerCard from '../AnswerCard';
import ConfirmationQuestion from '../ConfirmationQuestion';
export default (questionAnswer = [
  {
    question: {
      type: BinaryQuestion,
      props: {
        text: 'Reisen Sie Allein?',
      },
    },
    answerNo: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: (
        <View>
          <Text>{`Ich reise in Begleitung.`}</Text>
        </View>
      ),
    },
    answerYes: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: (
        <View>
          <Text>{`Ich reise allein.`}</Text>
        </View>
      ),
    },
  },
  {
    question: {
      type: BinaryQuestion,
      props: {
        text: 'Übersteigt der Gesamtwert aller Waren CHF 300?',
      },
    },
    answerNo: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: (
        <View>
          <Text>{`No, not above 300.`}</Text>
        </View>
      ),
    },
    answerYes: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: (
        <View>
          <Text>{`Yes, above 300.`}</Text>
        </View>
      ),
    },
  },
  {
    question: {
      type: ConfirmationQuestion,
      props: {},
      children: <Text>{`Fill in Question`}</Text>,
    },
    answerConfirm: {
      type: AnswerCard,
      props: {
        mainIcon: 'flight-takeoff',
        status: require('../../../assets/images/complete.png'),
      },
      children: (
        <View>
          <Text>{`Confirmed`}</Text>
        </View>
      ),
    },
  },
]);
