/* global describe, test, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';

import OnBoardingTaxScreen from '../../OnBoardingTaxScreen';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('OnBoardingTaxScreen', () => {
  test('renders according to snapshot', () => {
    const navMock = jest.fn();
    const component = shallow(
      <OnBoardingTaxScreen navigation={{ navigate: navMock }} />
    ).dive();
    expect(component).toMatchSnapshot();
    component.find('DoneButton').forEach(child => {
      child.simulate('press');
    });
    expect(navMock).toBeCalled();
  });
});
