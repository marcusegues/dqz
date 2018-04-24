import renderer from 'react-test-renderer';
import React from 'react';
import { LanguageButton } from '../LanguageButton';

describe('LanguageButton', () => {
  test('renders according to snapshot', () => {
    const component = renderer
      .create(
        <LanguageButton text="text" onPress={jest.fn()} languageCode="de" />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('renders according to snapshot', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="text"
          onPress={jest.fn()}
          languageCode="de"
          selected
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
