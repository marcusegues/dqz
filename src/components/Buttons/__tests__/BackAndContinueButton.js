import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import { BackAndContinueButtons } from '../BackAndContinueButtons';
import { RedButton } from '../RedButton';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('BackAndContinueButton', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(
        <BackAndContinueButtons
          text="text"
          onPressBack={jest.fn()}
          onPressContinue={jest.fn()}
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('we can click first button', () => {
    const clickFn = jest.fn();
    const component = shallow(
      <BackAndContinueButtons
        text="text"
        onPressBack={clickFn}
        onPressContinue={jest.fn()}
      />
    ).dive();
    component.find(RedButton).forEach((child, i) => {
      if (i === 0) {
        child.simulate('press');
      }
    });
    expect(clickFn).toBeCalled();
  });

  test('we can click second button', () => {
    const clickFn = jest.fn();
    const component = shallow(
      <BackAndContinueButtons
        text="text"
        onPressBack={jest.fn()}
        onPressContinue={clickFn}
      />
    ).dive();
    component.find(RedButton).forEach((child, i) => {
      if (i === 1) {
        child.simulate('press');
      }
    });
    expect(clickFn).toBeCalled();
  });
});
