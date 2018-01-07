// @flow
export type TFunction = (field: string | Array<string>, params?: {}) => string;
export type Navigation = {
  goBack: () => void,
  navigate: (route: string) => void,
};
