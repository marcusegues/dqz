// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { GoodQuantityGreyField } from '../GoodQuantityGreyField';
import { RedPlusIcon } from '../RedPlusIcon';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const mockFunc = jest.fn();

describe('GoodQuantityGreyField', () => {
  test('GoodQuantityGreyField renders correctly', () => {
    const tree = renderer
      .create(
        <GoodQuantityGreyField
          topText="topText"
          plusIconText="plusIconText"
          onPress={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('simulates click events in GoodQuantityGreyField', () => {
    expect.assertions(4);
    const wrapper = shallow(
      <GoodQuantityGreyField
        topText="topText"
        plusIconText="plusIconText"
        onPress={mockFunc}
      />
    );
    const render = wrapper.dive();
    render
      .find(RedPlusIcon)
      .at(0)
      .simulate('press');
    expect(wrapper.props().topText).toEqual('topText');
    expect(wrapper.props().plusIconText).toEqual('plusIconText');
    expect(wrapper.dive()).toMatchSnapshot();
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
