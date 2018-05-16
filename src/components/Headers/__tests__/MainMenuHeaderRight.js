// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { MainMenuHeaderRight } from '../subcomponents/MainMenuHeaderRight';
import { LanguageSelect } from '../subcomponents/LanguageSelect';

const clickFn = jest.fn();

describe('MainMenuHeaderRight Icon TestSuite', () => {
  test('renders as expected', () => {
    const wrapper = shallow(
      // $FlowFixMe
      <MainMenuHeaderRight navigation={{ dispatch: clickFn }} language="de" />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
  test('renders as expected', () => {
    const wrapper = shallow(
      // $FlowFixMe
      <MainMenuHeaderRight navigation={{ dispatch: clickFn }} language="de" />
    );
    expect(wrapper.find(LanguageSelect).prop('language')).toEqual('de');
  });
});
