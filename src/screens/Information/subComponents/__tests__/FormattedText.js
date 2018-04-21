import React from 'react';
// $FlowFixMe
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { FormattedText } from '../FormattedText';

describe('FormattedText', () => {
  test('FormattedText renders according to snapshot', () => {
    const component = renderer
      .create(<FormattedText text="FormattedText" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('FormattedText component renders correctly if color prop is set', () => {
    const tree = renderer
      .create(<FormattedText text="FormattedText" style={{ color: 'blue' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('FormattedText component renders correctly if bold prop is passed', () => {
    const tree = renderer
      .create(<FormattedText text="FormattedText test" bold />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const wrapper = shallow(<FormattedText style={{ fontSize: 20 }} bold />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ bold: false, style: {} });
    expect(wrapper).toMatchSnapshot();
  });
});
