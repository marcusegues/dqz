import React from 'react';
import { View, Text } from 'react-native';
import YesNoQuestionCard from '../YesNoQuestionCard';
import AnswerCard from '../AnswerCard';
import ConfirmationQuestionCard from '../ConfirmationQuestionCard';
export default (questionAnswer = [
  {
    question: {
      type: YesNoQuestionCard,
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
      type: YesNoQuestionCard,
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
      type: ConfirmationQuestionCard,
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
