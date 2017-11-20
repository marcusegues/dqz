import Node from './Node';

export default class YesNoNode extends Node {
  constructor(
    questionAnswerIdx,
    parent = null,
    no = null,
    yes = null,
    answer = null
  ) {
    super(questionAnswerIdx, parent);
    this.next = {
      yes,
      no,
    };
    this.answer = answer;
  }

  insertYes(node) {
    this.next.yes = node;
    node.parent = this;
    return node;
  }

  insertNo(node) {
    this.next.no = node;
    node.parent = this;
    return node;
  }

  getNextNodes() {
    return this.next;
  }
}
