import React from 'react';
// $ FlowFixMe
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { DutyList } from '../subcomponents/DutyList';
import { getTotalQuantity } from '../../../model/configurationApi';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('DutyList', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<DutyList {...this.props} getTotalQuantity={() => {}} />)
      // .create(<DutyList onPressDelete={() => {}} />)
      .toJSON();
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
