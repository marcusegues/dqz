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
      /*
      DISABLED, as called too often
      Amplitude.logEventWithProperties('QACard opened', {
        cardName: event.cardName,
      });
      */
      break;
    }
    case 'LanguageChanged': {
      Amplitude.logEventWithProperties('Language changed', {
        language: event.language,
      });
      break;
    }
    case 'PeopleChanged': {
      const { adults, minors } = event;
      Amplitude.logEventWithProperties('People input changed', {
        adults,
        minors,
      });
      break;
    }
    case 'MainCategoriesChanged': {
      Amplitude.logEventWithProperties('Main Categories changed', {
        mainCategories: event.mainCategories.join(', '),
      });
      break;
    }
    case 'QuantityAdded': {
      const { category, quantity } = event;
      Amplitude.logEventWithProperties('Quantity added', {
        category,
        quantity,
      });
      break;
    }
    case 'QuantityDeleted': {
      const { category, quantity } = event;
      Amplitude.logEventWithProperties('Quantity deleted', {
        category,
        quantity,
      });
      break;
    }
    case 'AmountAdded': {
      const { currency, amount } = event;
      Amplitude.logEventWithProperties('Amount added', {
        amount,
        currency,
      });
      break;
    }
    case 'AmountDeleted': {
      const { currency, amount } = event;
      Amplitude.logEventWithProperties('Amount deleted', {
        amount,
        currency,
      });
      break;
    }
    case 'InitPayment': {
      const { amounts, basket, duty, vat } = event;
      Amplitude.logEventWithProperties('Payment Initialized', {
        amounts: JSON.stringify(amounts),
        basket: JSON.stringify(basket),
        duty,
        vat,
      });
      break;
    }
    default:
  }
};
