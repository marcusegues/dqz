import BinaryNode from './nodes/BinaryNode';
import ConfirmationNode from './nodes/ConfirmationNode';

const root = new BinaryNode(0);
const node1 = new BinaryNode(1);
const node2 = new ConfirmationNode(2);
root.insertYes(node1);
root.insertNo(node2);

export { root };
