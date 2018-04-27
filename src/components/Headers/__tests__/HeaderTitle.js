// import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { HeaderTitle } from '../subcomponents/HeaderTitle';

describe('HeaderTitle', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<HeaderTitle text="QuickZoll" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('renders according to snapshot', () => {
    const wrapper = shallow(<HeaderTitle text="QuickZoll" />);
    const render = wrapper.dive();
    expect(render).toMatchSnapshot();
    expect(render.text()).toEqual('QuickZoll');
  });
});
