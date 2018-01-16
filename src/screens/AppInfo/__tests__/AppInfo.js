import React from 'react';
import { shallow } from 'enzyme';

import { AppInfo } from '../AppInfo';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AppInfo', () => {
  test('renders according to snapshot and simulates click on ModalTab', () => {
    const navMock = jest.fn();
    const component = shallow(
      <AppInfo navigation={{ navigate: navMock }} />
    ).dive();
    expect(component).toMatchSnapshot();
    component.find('ModalTab').forEach(child => {
      child.simulate('press');
    });
  });
});
