import YesNoNode from './nodes/YesNoNode';
import Node from './nodes/Node';
import ConfirmationNode from './nodes/ConfirmationNode';

const root = new Node(0);
const confirmMultiplePersons = new YesNoNode(2);
const confirmSinglePerson = new YesNoNode(1);
root.insertNext('confirmMultiplePersons', confirmMultiplePersons);
root.insertNext('confirmSinglePerson', confirmSinglePerson);

export { root };
