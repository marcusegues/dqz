/* global describe, test, expect */

import { stackNavigatorConfig, stackNavigatorScreens } from '../RootNavigation';

describe('StackNavigation', () => {
  test('has OnBoarding as initial route', () => {
    expect(stackNavigatorConfig.initialRouteName).toBe('OnBoarding');
  });

  test('has all screens', () => {
    expect(Object.keys(stackNavigatorScreens).sort()).toMatchSnapshot();
  });
});
