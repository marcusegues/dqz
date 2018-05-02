import renderer from 'react-test-renderer';
import React from 'react';
import { LanguageButton } from '../LanguageButton';

const clickFn = jest.fn();

describe('LanguageButton', () => {
  test('"de" language and "size=small" renders according to snapshot', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="text"
          onPress={clickFn}
          languageCode="de"
          size="small"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('selected button with "de" language', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="de"
          onPress={clickFn}
          languageCode="de"
          selected
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('"en" language and "size=small" renders according to snapshot', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="en"
          onPress={clickFn}
          languageCode="en"
          size="small"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('selected button with "en" language', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="en"
          onPress={clickFn}
          languageCode="en"
          selected
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('"it" language and "size=small" renders according to snapshot', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="it"
          onPress={clickFn}
          languageCode="it"
          size="small"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('selected button with "it" language', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="it"
          onPress={clickFn}
          languageCode="it"
          selected
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('"fr" language and "size=small" renders according to snapshot', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="fr"
          onPress={clickFn}
          languageCode="fr"
          size="small"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('selected button with "fr" language', () => {
    const component = renderer
      .create(
        <LanguageButton
          text="fr"
          onPress={clickFn}
          languageCode="fr"
          selected
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
