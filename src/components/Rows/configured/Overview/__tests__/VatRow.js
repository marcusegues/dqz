import React from 'react';
// $ FlowFixMe
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { VatRow } from '../VatRow/VatRow';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('VatRow', () => {
  test('renders according to snapshot', () => {
    // $ FlowFixMe
    const component = renderer.create(<VatRow />).toJSON();
    expect(component).toMatchSnapshot();
  });
  // test('can be clicked', () => {
  //   const clickFn = jest.fn();
  //   const component = shallow(<SwipeToDelete onPressDelete={clickFn} />);
  //   component.find(TouchableHighlight).forEach(child => {
  //     child.simulate('press');
  //   });
  //   expect(clickFn).toHaveBeenCalled();
  // });
});
