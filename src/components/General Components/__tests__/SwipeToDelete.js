import React from 'react';
// $ FlowFixMe
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { SwipeToDelete } from '../SwipeableContent/configured/SwipeToDelete';

describe('SwipeToDelete', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<SwipeToDelete onPressDelete={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('can be clicked', () => {
    const clickFn = jest.fn();
    const component = shallow(<SwipeToDelete onPressDelete={clickFn} />);
    component.find(TouchableHighlight).forEach(child => {
      child.simulate('press');
    });
    expect(clickFn).toHaveBeenCalled();
  });
});
