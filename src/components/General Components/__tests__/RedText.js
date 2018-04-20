import React from 'react';
// $FlowFixMe
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { RedText } from '../RedText';

describe('RedText', () => {
  test('RedText renders according to snapshot', () => {
    const component = renderer
      .create(<RedText text="FormattedText" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('RedText component renders correctly if style prop is set', () => {
    const tree = renderer
      .create(<RedText text="RedText" style={{ color: 'blue' }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const wrapper = shallow(
      <RedText text="testText" style={{ fontSize: 20 }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
