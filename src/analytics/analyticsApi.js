// @flow

import { sendEventToAmplitude } from './amplitude';

export const analyticsCustom = (eventName: string) =>
  sendEventToAmplitude({ type: 'Custom', eventName });

export const analyticsScreenMounted = (screenName: string) => {
  sendEventToAmplitude({
    type: 'ScreenMounted',
    screen: `${screenName} has mounted`,
  });
};

export const analyticsLanguageChanged = (language: string) =>
  sendEventToAmplitude({ type: 'LanguageChanged', language });
