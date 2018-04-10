// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { BackToMainInformation } from '../BackToMainInformation';

describe('Back to main information', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(
      // $FlowFixMe
      <BackToMainInformation navigation={undefined} />
    );
    expect(component).toMatchSnapshot();
  });

  test('clicking it has the right effect', () => {
    const mockDispatch = jest.fn();
    const mockNav = { dispatch: mockDispatch };
    // $FlowFixMe
    const component = shallow(<BackToMainInformation navigation={mockNav} />);
    component.simulate('press');
    expect(mockDispatch).toBeCalledWith({
      type: 'NAVIGATE',
      screen: 'InformationMainCategories',
    });
  });
});
