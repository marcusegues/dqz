import React from 'react';
import { shallow } from 'enzyme';
import packageJson from '../../../../package.json';
import { AppInfo } from '../AppInfo';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

jest.mock('../../../../package.json');

describe('AppInfo', () => {
  test('renders according to snapshot and check ModalTab onPress prop', () => {
    const component = shallow(<AppInfo />).dive();
    expect(component).toMatchSnapshot();
    component.find('ModalTab').forEach(child => {
      expect(child.props()).toHaveProperty('onPress');
    });
  });
  test('renders designAndDevelopment modal part', () => {
    packageJson.version = '0.0.1';
    const wrapper = shallow(<AppInfo />);
    const render = wrapper.dive();
    expect(render.find('ModalTab')).toHaveLength(2);
    render
      .find('ModalTab')
      .at(1)
      .prop('onPress')();
    render.update();
    expect(render).toMatchSnapshot();
  });
});
