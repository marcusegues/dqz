// @flow
import * as React from 'react';

/**
 * Type for the the translation function as used in
 */
export type TFunction = (field: string | Array<string>, params?: {}) => string;

/**
 * Type for the navigation obejct as it is used to get around in the application
 */
export type Navigation = {
  goBack: () => void,
  navigate: (route: string) => void,
};

/**
 * very generic type for children passed to a component
 * For more information, please consult: https://flow.org/en/docs/react/children/
 */
export type Children = React.ChildrenArray<React.Element<any>>;
