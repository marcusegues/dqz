// @flow

import { stackNavigatorScreens } from '../RootNavigation';
import { nav } from '../../reducers/nav';

describe('StackNavigation', () => {
  test('has OnBoarding as initial route', () => {
    expect(nav(undefined, { type: 'INIT' }).routes[0].routeName).toBe(
      'OnBoarding'
    );
  });

  test('has all screens', () => {
    expect(Object.keys(stackNavigatorScreens).sort()).toMatchSnapshot();
  });
});
