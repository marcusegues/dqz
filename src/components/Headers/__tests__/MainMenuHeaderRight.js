// @flow
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
// $FlowFixMe
import { MainMenuHeaderRight } from '../subcomponents/MainMenuHeaderRight';
import { LanguageSelect } from '../subcomponents/LanguageSelect';

describe('MainMenuHeaderRight Icon TestSuite', () => {
  test('MainMenuHeaderRight component renders correctly', () => {
    const clickFn = jest.fn();
    // $FlowFixMe
    const tree = renderer
      // $FlowFixMe
      .create(
        // $FlowFixMe
        <MainMenuHeaderRight navigation={clickFn} language="de" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('we can click it', () => {
    const clickFn = jest.fn();
    // $FlowFixMe
    const component = shallow(
      // $FlowFixMe
      <MainMenuHeaderRight navigation={{ dispatch: clickFn }} language="de" />
    );
    component.find(LanguageSelect).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'UnderConstruction',
    });
  });
});
