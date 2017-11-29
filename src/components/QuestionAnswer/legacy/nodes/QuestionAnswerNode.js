// file will be rewritten
export default class Node {
  constructor(questionAnswerIdx, parent = null, next = {}) {
    this.questionAnswerIdx = questionAnswerIdx;
    this.parent = parent;
    this.next = next;
  }

  insertNext(type, node) {
    this.next[type] = node;
    node.parent = this;
    return node;
  }

  getNextNodes() {
    return this.next;
  }
}
