import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { TouchableWithoutFeedback } from 'react-native';
import { CloseIcon } from '../CloseIcon';

describe('CloseIcon', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<CloseIcon onPress={jest.fn()} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('can be clicked', () => {
    const clickFn = jest.fn();
    const component = shallow(<CloseIcon onPress={clickFn} />);
    component.find(TouchableWithoutFeedback).forEach(child => {
      child.simulate('press');
    });
    expect(clickFn).toHaveBeenCalled();
  });
});
