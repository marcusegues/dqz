import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import { LegalNoticeModal } from '../LegalNoticeModal';
import { SquareCheckBox } from '../../../CheckBox/SquareCheckBox';
import { RedButton } from '../../../Buttons/RedButton';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('LegalNoticeModal', () => {
  test('LegalNoticeModal renders according to snapshot', () => {
    const component = renderer.create(<LegalNoticeModal />).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('shallow rendering with `modalVisible=true`', () => {
    const wrapper = shallow(<LegalNoticeModal modalVisible />);
    expect(wrapper.dive()).toMatchSnapshot();
  });

  test('you can click on "Touchable" and on "RedButton"', () => {
    const wrapper = shallow(
      <LegalNoticeModal
        modalVisible
        onPressLegal={clickFn}
        onConfirm={clickFn}
      />
    );
    const render = wrapper.dive();
    render.find(Touchable).simulate('press');
    render.find(RedButton).simulate('press');
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(2);
  });

  test('"checked" should be falsy', () => {
    const wrapper = shallow(
      <LegalNoticeModal
        modalVisible
        onPressLegal={clickFn}
        onConfirm={clickFn}
      />
    ).dive();
    expect(wrapper.state('checked')).toBeFalsy();

    wrapper.find(SquareCheckBox).simulate('press');
    expect(wrapper.dive()).toMatchSnapshot();
    expect(clickFn.mock.calls.length).toBe(2);
    expect(wrapper.state('checked')).toBeTruthy();
  });
});
