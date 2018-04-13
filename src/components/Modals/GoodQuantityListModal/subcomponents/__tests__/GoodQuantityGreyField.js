// @flow
import React from 'react';
// $FlowFixMe
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { GoodQuantityGreyField } from '../GoodQuantityGreyField';
import { RedPlusIcon } from '../RedPlusIcon';

const wrapper = shallow(
  <GoodQuantityGreyField
    topText="topText"
    plusIconText="plusIconText"
    onPress={() => {}}
  />
);
// console.log(wrapper.debug());

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('InfoIcon Icon TestSuite', () => {
  test('InfoIcon component renders correctly', () => {
    const tree = renderer
      .create(
        <GoodQuantityGreyField
          topText="topText"
          plusIconText="plusIconText"
          onPress={clickFn}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const component = shallow(
      <GoodQuantityGreyField
        topText="topText"
        plusIconText="plusIconText"
        onPress={() => {}}
      />
    );
    // console.log(component.debug());

    // component
    //   .find(RedPlusIcon)
    //   .find(TouchableOpacity)
    //   .forEach(child => {
    //     // component.find(TouchableOpacity).forEach(child => {
    //     child.simulate('press');
    //   });
    // expect(clickFn).toHaveBeenCalled();
    // component.find(TouchableOpacity).simulate('press');
    // expect(clickFn).toBeCalled();
    // expect(clickFn).toBeCalledWith({
    //   type: "NAVIGATE",
    //   screen: "AppInfo"
    // });
  });
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <GoodQuantityGreyField
        topText="topText"
        plusIconText="plusIconText"
        onPress={onButtonClick}
      />
    );
    // const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find(TouchableOpacity).simulate('click');
    // expect(onButtonClick).toBeCalled();
    // expect(onButtonClick.calledOnce).to.equal(true);
  });
});
