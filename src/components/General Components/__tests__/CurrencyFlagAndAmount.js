// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { CurrencyFlagAndAmount } from '../../General Components/CurrencyFlagAndAmount';
import { CurrencyFlag } from '../CurrencyFlag';
import { CardRowText } from '../../QuestionAnswer/Cards/subcomponents/CardRowText';

describe('CurrencyFlagAndAmount TestSuite', () => {
  test('CurrencyFlagAndAmount component renders correctly', () => {
    const tree = renderer
      .create(<CurrencyFlagAndAmount currency="EUR" amount={22} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('CurrencyFlagAndAmount shallow rendered component renders correctly', () => {
    const wrapper = shallow(
      <CurrencyFlagAndAmount currency="EUR" amount={22.444555} />
    ).dive();
    expect(wrapper.find(CurrencyFlag).prop('currency')).toEqual('EUR');
    expect(wrapper.find(CardRowText).prop('text')).toEqual('EUR 22.44');
  });
});
