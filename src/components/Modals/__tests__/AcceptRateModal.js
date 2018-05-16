import React from 'react';
import renderer from 'react-test-renderer';
import { AcceptRateModal } from '../AcceptRateModal/AcceptRateModal';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AcceptRateModal', () => {
  test('renders according to snapshot', () => {
    const component = renderer.create(<AcceptRateModal />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
