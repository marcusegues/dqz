import React from 'react';
import Immutable from 'immutable';
import BinaryNode from './nodes/BinaryNode';
import BinaryQuestion from '../BinaryQuestion';
import { v4 } from 'uuid';
import { root } from './questionAnswerTree';
import questionAnswer from './questionAnswer';
import { View, Text } from 'react-native';

export default class QuestionAnswerFlow extends React.Component {
  constructor(props) {
    super(props);
    this.root = root;
    this.current = this.root;
    const elements = Immutable.List();
    this.state = {
      elements,
    };
    this.getCurrentElement = this.getCurrentElement.bind(this);
    this.getCurrentQuestionElement = this.getCurrentQuestionElement.bind(this);
    this.getCurrentAnswerElement = this.getCurrentAnswerElement.bind(this);
    this.onAnswerYes = this.onAnswerYes.bind(this);
    this.onAnswerNo = this.onAnswerNo.bind(this);
    this.onAnswerConfirm = this.onAnswerConfirm.bind(this);
  }

  componentWillMount() {
    const element = this.getCurrentElement();
    this.setState({
      elements: this.state.elements.push(element),
    });
  }

  getCurrentElement() {
    if (!this.current) {
      return null;
    }
    if (this.current.answer) {
      return this.getCurrentAnswerElement();
    }
    return this.getCurrentQuestionElement();
  }

  getCurrentQuestionElement() {
    const { questionAnswerIdx } = this.current;
    const { question: { type, props: { ...props } } } = questionAnswer[
      questionAnswerIdx
    ];
    const element = React.createElement(type, {
      ...props,
      onAnswerYes: this.onAnswerYes,
      onAnswerNo: this.onAnswerNo,
      onAnswerConfirm: this.onAnswerConfirm,
      key: v4(),
    });
    return element;
  }

  getCurrentAnswerElement() {
    const { questionAnswerIdx } = this.current;
    const {
      [this.current.answer]: { type, props: { ...props }, children },
    } = questionAnswer[questionAnswerIdx];
    const element = React.createElement(type, {
      ...props,
      children,
      key: v4(),
    });
    return element;
  }

  onAnswerYes() {
    console.log('yes');
    this.current.answer = 'answerYes';
    const elements = this.state.elements.withMutations(e => {
      e.pop();
      const answerElement = this.getCurrentElement();
      e.push(answerElement);
      this.current = this.current.nextYes;
      if (!this.current) {
        return;
      }
      const questionElement = this.getCurrentElement();
      e.push(questionElement);
    });
    this.setState({ elements });
  }

  onAnswerNo() {
    console.log('no');
    this.current.answer = 'answerNo';
    const elements = this.state.elements.withMutations(e => {
      e.pop();
      const answerElement = this.getCurrentElement();
      e.push(answerElement);
      this.current = this.current.nextNo;
      if (!this.current) {
        return;
      }
      const questionElement = this.getCurrentElement();
      e.push(questionElement);
    });
    this.setState({ elements });
  }

  onAnswerConfirm() {
    console.log('no');
    this.current.answer = 'answerConfirm';
    const elements = this.state.elements.withMutations(e => {
      e.pop();
      const answerElement = this.getCurrentElement();
      e.push(answerElement);
      this.current = this.current.next;
      if (!this.current) {
        return;
      }
      const questionElement = this.getCurrentElement();
      e.push(questionElement);
    });
    this.setState({ elements });
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        {this.state.elements}
      </View>
    );
  }
}
