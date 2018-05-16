import React from 'react';
// $FlowFixMe
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { OnBoardingTaxScreen } from '../OnBoardingTaxScreen';
import { DoneButton } from '../subcomponents/DoneButton';
import { SkipThisStep } from '../subcomponents/SkipThisStep';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('OnBoardingTaxScreen', () => {
  test('OnBoardingTaxScreen renders as expected', () => {
    const wrapper = shallow(<OnBoardingTaxScreen />);
    expect(wrapper).toMatchSnapshot();
  });
  test('OnBoardingTaxScreen renders as expected with language', () => {
    const wrapper = shallow(
      <OnBoardingTaxScreen
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('OnBoardingTaxScreen renders as expected with language with dive()', () => {
    const wrapper = shallow(
      <OnBoardingTaxScreen
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  test('You can click on DoneButton', () => {
    const wrapper = shallow(
      <OnBoardingTaxScreen
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    const render = wrapper.dive();
    render.find(DoneButton).forEach(child => {
      child.simulate('press');
    });
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(1);
  });

  test('we can click it with params', () => {
    const wrapper = shallow(
      <OnBoardingTaxScreen
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    const render = wrapper.dive();
    render.find(SkipThisStep).simulate('press');
    expect(clickFn).toBeCalled();
    expect(clickFn).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'MainMenu',
    });
  });

  test('You can click on SkipThisStep', () => {
    const wrapper = shallow(
      <OnBoardingTaxScreen
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    );
    const render = wrapper.dive();
    render.find(SkipThisStep).simulate('press');
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(3);
  });

  test('You can setState of showModal to true', () => {
    const wrapper = shallow(
      <OnBoardingTaxScreen
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    ).dive();
    expect(wrapper.state('showModal')).toBeFalsy();
    wrapper.find(TouchableOpacity).simulate('press');
    expect(wrapper.state('showModal')).toBeTruthy();
  });

  test('You can find FurtherInformationModal and setState of showModal to true', () => {
    const wrapper = shallow(
      <OnBoardingTaxScreen
        navigation={{ dispatch: clickFn }}
        i18n={{ language: 'de', t: 'test' }}
      />
    ).dive();
    wrapper.setProps({
      children: React.cloneElement(wrapper.props().children, {
        modalVisible: true,
      }),
    });
    expect(wrapper.props('modalVisible')).toBeTruthy();
  });
});
