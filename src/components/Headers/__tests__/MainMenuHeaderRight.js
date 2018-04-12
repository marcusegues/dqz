// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { MainMenuHeaderRight } from '../subcomponents/MainMenuHeaderRight';

describe('MainMenuHeaderRight Icon TestSuite', () => {
  test('renders as expected', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(
      // $FlowFixMe
      <MainMenuHeaderRight navigation={clickFn} language="de" />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
