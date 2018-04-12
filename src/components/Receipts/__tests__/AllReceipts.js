import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Immutable from 'immutable';
import { AllReceipts } from '../AllReceipts/AllReceipts';
import { fetchReceipts } from '../../../asyncStorage/storageApi';
import { deserializeReceipts } from '../../../asyncStorage/deserializers';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
  receipts: Immutable.List(),
};

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

describe('AllReceipts', () => {
  test('Renders empty AllReceipts component to snapshot', async () => {
    const tree = await renderer.create(
      <AllReceipts store={mockStore(initialState)} i18n={{ language: 'de' }} />
    );
    const json = await tree.toJSON();
    expect(json).toMatchSnapshot();
  });
});
