import React from 'react';
import renderer from 'react-test-renderer';
import { LegalNoticeInfo } from '../LegalNoticeInfo';

jest.mock('react-i18next', () => ({
  translate: () => Component => props => <Component t={() => ''} {...props} />,
  Trans: 'Trans',
}));

describe('LegalNoticeInfo snapshot test', () => {
  test('Renders empty AllReceipts component to snapshot', async () => {
    const tree = await renderer.create(
      <LegalNoticeInfo i18n={{ language: 'de' }} />
    );
    const json = await tree.toJSON();
    expect(json).toMatchSnapshot();
  });
});
