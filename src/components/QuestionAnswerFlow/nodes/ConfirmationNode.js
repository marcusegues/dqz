import Node from './Node';

export default class ConfirmationNode extends Node {
  constructor(questionAnswerIdx, parent = null, next = null) {
    super(questionAnswerIdx, parent);
    this.next = null;
    this.answer = null;
  }
}
