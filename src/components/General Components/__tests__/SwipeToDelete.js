import React from 'react';
import { shallow } from 'enzyme';
import { TouchableHighlight } from 'react-native';
import renderer from 'react-test-renderer';
import { SwipeToDelete } from '../SwipeableContent/configured/SwipeToDelete';
import { SwipeableContent } from '../SwipeableContent/SwipeableContent';

const mockFunc = jest.fn();

describe('SwipeToDelete', () => {
  // test('renders according to snapshot', () => {
  //   const component = renderer
  //     // .create(<SwipeToDelete />)
  //     .create(<SwipeToDelete onPress={mockFunc} />)
  //     .toJSON();
  //   expect(component).toMatchSnapshot();
  // });

  test('simulates click events in GoodQuantityGreyField', () => {
    const wrapper = shallow(<SwipeToDelete onPress={mockFunc} />);
    const render = wrapper.dive();
    expect(render.find('SwipeableContent')).toHaveLength(1);
    // expect(render.find(SwipeableContent).find(TouchableHighlight)).toHaveLength(
    //   1
    // );
    // render.find(TouchableHighlight).forEach(child => {
    //   child.simulate('press');
    // });
    // expect(mockFunc).toHaveBeenCalled();
    // expect(wrapper.dive()).toMatchSnapshot();
    // expect(mockFunc.mock.calls.length).toBe(1);
  });
});
