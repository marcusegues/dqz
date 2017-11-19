export default class Node {
  constructor(questionAnswerIdx, parent = null) {
    this.questionAnswerIdx = questionAnswerIdx;
    this.parent = parent;
  }
}
