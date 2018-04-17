// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MainMenu } from '../MainMenu';
import Touchable from 'react-native-platform-touchable';
import type { Basket } from '../../../model/types/basketPeopleAmountsTypes';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
  basket: {
    // unit: 'kilo',
  },
};

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

const clickFn = jest.fn();

describe('MainMenu', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(
        // $FlowFixMe
        <MainMenu
          store={mockStore(initialState)}
          navigation={{ dispatch: clickFn }}
          i18n={{ language: 'de' }}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  // test('MainMenu with topText and plusIconText props renders correctly', () => {
  //   const tree = renderer
  //     .create(
  //       <MainMenu
  //         topText="topText"
  //         plusIconText="plusIconText"
  //         onPress={mockFunc}
  //       />
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  // test('MainMenu component renders correctly', () => {
  //   const clickFn = jest.fn();
  //   // $FlowFixMe
  //   const tree = renderer
  //     .create(
  //       // $FlowFixMe
  //       <MainMenu store={clickFn} navigation={{ dispatch: clickFn }} />
  //     )
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  // test('we can click it', () => {
  //   const clickFn = jest.fn();
  //   // $FlowFixMe
  //   const component = shallow(<MainMenu navigation={{ dispatch: clickFn }} />);
  //   component.find(Touchable).simulate('press');
  //   expect(clickFn).toBeCalled();
  //   expect(clickFn).toBeCalledWith({
  //     type: 'NAVIGATE',
  //     screen: 'MainMenu',
  //   });
  // });
  // test('simulates click events', () => {
  //   const component = shallow(
  //     <MainMenu
  //       topText="topText"
  //       plusIconText="plusIconText"
  //       onPress={mockFunc}
  //     />
  //   );
  //   component.simulate('press');
  //   expect(mockFunc.mock.calls.length).toBe(1);
  // });
  // test('simulates click events', () => {
  //   const component = shallow(
  //     <GoodQuantityGreyField
  //       topText="topText"
  //       plusIconText="plusIconText"
  //       onPress={mockFunc}
  //     />
  //   );
  //   component.find(RedPlusIcon).simulate('press');
  //   // component.find(TouchableOpacity).simulate('press');
  //   expect(mockFunc.mock.calls.length).toBe(1);
  // });
});
