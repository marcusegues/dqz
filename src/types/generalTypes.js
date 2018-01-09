// @flow
import * as React from 'react';

export type TFunction = (field: string | Array<string>, params?: {}) => string;
export type Navigation = {
  goBack: () => void,
  navigate: (route: string) => void,
};

export type Children = React.ChildrenArray<React.Element<any>>;
// | React.Element<any>;
