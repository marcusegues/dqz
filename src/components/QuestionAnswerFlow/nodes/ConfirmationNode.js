import Node from './Node';

export default class ConfirmationNode extends Node {
  constructor(questionAnswerIdx, parent = null, confirm = null) {
    super(questionAnswerIdx, parent);
    this.next = {
      confirm,
    };
    this.answer = null;
  }

  insertConfirm(node) {
    this.next.confirm = node;
    node.parent = this;
    return node;
  }
}
