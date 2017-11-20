import YesNoNode from './nodes/YesNoNode';
import ConfirmationNode from './nodes/ConfirmationNode';

const root = new YesNoNode(0);
const node1 = new YesNoNode(1);
const node2 = new ConfirmationNode(2);
root.insertYes(node1);
root.insertNo(node2);

export { root };
