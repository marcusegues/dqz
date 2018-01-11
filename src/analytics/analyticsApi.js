// @flow

import { sendEventToAmplitude } from './amplitude';

export const analyticsCustom = (eventName: string) =>
  sendEventToAmplitude({ type: 'Custom', eventName });

export const analyticsScreenMounted = (screen: string) => {
  sendEventToAmplitude({
    type: 'ScreenMounted',
    screen,
  });
};

export const analyticsLanguageChanged = (language: string) =>
  sendEventToAmplitude({ type: 'LanguageChanged', language });

export const analyticsQACardOpenend = (cardName: string) =>
  sendEventToAmplitude({ type: 'QACardOpened', cardName });
