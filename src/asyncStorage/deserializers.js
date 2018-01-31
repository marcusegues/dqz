// @flow
import Immutable from 'immutable';

export const deserializePeople = (serialized: string) =>
  Immutable.fromJS(serialized);
