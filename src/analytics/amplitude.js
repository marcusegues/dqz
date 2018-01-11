// @flow

// $FlowFixMe
import { Amplitude } from 'expo';
import type { AnalyticsEvent } from './eventTypes';

export const sendEventToAmplitude = (event: AnalyticsEvent): void => {
  switch (event.type) {
    case 'ScreenMounted': {
      Amplitude.logEvent(`${event.screen} has mounted`);
      break;
    }
    case 'Custom': {
      Amplitude.logEvent(event.eventName);
      break;
    }
    case 'QACardOpened': {
      Amplitude.logEventWithProperties('QACard opened', {
        cardName: event.cardName,
      });
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
