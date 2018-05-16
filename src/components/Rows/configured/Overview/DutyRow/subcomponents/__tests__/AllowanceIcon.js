// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { AllowanceIcon } from '../AllowanceIcon';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AllowanceIcon', () => {
  test('AllowanceIcon renders correctly', () => {
    const tree = renderer
      .create(<AllowanceIcon quantity={4} unit="kg" text="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('shallow renders and text matches to "test 4 kg" ', () => {
    const wrapper = shallow(
      <AllowanceIcon quantity={4} unit="kg" text="test" />
    ).dive();
    expect(
      wrapper
        .find(Text)
        .children()
        .text()
    ).toEqual('test 4 kg');
    expect(wrapper).toMatchSnapshot();
  });
});
