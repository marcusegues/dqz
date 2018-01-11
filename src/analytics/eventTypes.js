// @flow

export type AnalyticsEvent =
  | {
      type: 'ScreenMounted',
      screen: string,
    }
  | {
      type: 'Custom',
      eventName: string,
    }
  | {
      type: 'LanguageChanged',
      language: string,
    };
