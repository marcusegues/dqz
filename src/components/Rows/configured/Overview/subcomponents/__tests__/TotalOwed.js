// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { TotalOwed } from '../TotalOwed';
import { CardRowText } from '../../../../../QuestionAnswer/Cards/subcomponents/CardRowText';

describe('TotalOwed', () => {
  test('TotalOwed renders correctly', () => {
    const tree = renderer.create(<TotalOwed result="test result" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('shallow renders correctly and text matches', () => {
    const wrapper = shallow(<TotalOwed result="test result" />);
    const render = wrapper.dive();
    expect(render.find(CardRowText).props().text).toEqual('test result');
    expect(render).toMatchSnapshot();
  });
});
