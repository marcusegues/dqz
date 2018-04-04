import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Touchable from 'react-native-platform-touchable';
import { BackArrow } from '../subcomponents/BackArrow';

describe('BackArrow', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<BackArrow onPress={jest.fn()} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('we can click it', () => {
    const clickFn = jest.fn();
    const component = shallow(<BackArrow onPress={clickFn} />);
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
  });
});
