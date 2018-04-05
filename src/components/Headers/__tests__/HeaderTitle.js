// import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HeaderTitle } from '../subcomponents/HeaderTitle';

describe('HeaderTitle', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(<HeaderTitle text="QuickZoll" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
