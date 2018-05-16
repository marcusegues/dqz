import React from 'react';
import { shallow } from 'enzyme';

import { OnBoardingTaxScreen } from '../../OnBoardingTaxScreen';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('OnBoardingTaxScreen', () => {
  test('renders according to snapshot and DoneButton fires navigation', () => {
    const navMock = jest.fn();
    const component = shallow(
      <OnBoardingTaxScreen navigation={{ dispatch: navMock }} />
    ).dive();
    expect(component).toMatchSnapshot();
    component.find('DoneButton').forEach(child => {
      child.simulate('press');
    });
    expect(navMock).toBeCalled();
    expect(navMock).toBeCalledWith({ screen: 'MainMenu', type: 'NAVIGATE' });
    expect(component).toMatchSnapshot();

    component.find('SkipThisStep').forEach(child => {
      child.simulate('press');
    });
    expect(navMock).toBeCalled();
    expect(navMock).toBeCalledWith({ screen: 'MainMenu', type: 'NAVIGATE' });
    expect(component).toMatchSnapshot();
  });
});
