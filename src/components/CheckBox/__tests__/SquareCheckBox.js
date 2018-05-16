import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Touchable from 'react-native-platform-touchable';
import { SquareCheckBox } from '../SquareCheckBox';

describe('SquareCheckBox', () => {
  test('renders according to snapshot unchecked', () => {
    const component = renderer
      .create(<SquareCheckBox checked={false} onPress={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('renders according to snapshot checked', () => {
    const component = renderer
      .create(<SquareCheckBox checked onPress={() => {}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('we can click it', () => {
    const clickFn = jest.fn();
    const component = shallow(<SquareCheckBox onPress={clickFn} />);
    component.find(Touchable).simulate('press');
    expect(clickFn).toBeCalled();
  });
});
