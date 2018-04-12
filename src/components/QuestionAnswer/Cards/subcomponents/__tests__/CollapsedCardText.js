import React from 'react';
import renderer from 'react-test-renderer';
import { CollapsedCardText } from '../CollapsedCardText';

describe('CollapsedCardText', () => {
  test('CollapsedCardText renders according to snapshot', () => {
    const component = renderer
      .create(<CollapsedCardText text="MockCollapsedCardText" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('CollapsedCardText component renders correctly if color prop is set', () => {
    const tree = renderer
      .create(
        <CollapsedCardText
          text="MockCollapsedCardText"
          style={{ color: 'red' }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
