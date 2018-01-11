// @flow

// $FlowFixMe
import { Amplitude } from 'expo';
import type { AnalyticsEvent } from './eventTypes';

export const sendEventToAmplitude = (event: AnalyticsEvent): void => {
  switch (event.type) {
    case 'ScreenMounted': {
      Amplitude.logEvent(event.screen);
      break;
    }
    case 'Custom': {
      Amplitude.logEvent(event.eventName);
      break;
    }
    case 'LanguageChanged': {
      Amplitude.logEventWithProperties('Language changed', {
        language: event.language,
      });
      break;
    }
    default:
  }
};
