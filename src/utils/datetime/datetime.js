// @flow
import { DateTime } from 'luxon';

const localMonth = {
  fr: {
    '01': 'janvier',
    '02': 'février',
    '03': 'mars',
    '04': 'avril',
    '05': 'mai',
    '06': 'juin',
    '07': 'juillet',
    '08': 'août',
    '09': 'septembre',
    '10': 'octobre',
    '11': 'novembre',
    '12': 'décembre',
  },
  it: {
    '01': 'gennaio',
    '02': 'febbraio',
    '03': 'marzo',
    '04': 'aprile',
    '05': 'maggio',
    '06': 'giugno',
    '07': 'luglio',
    '08': 'agosto',
    '09': 'settembre',
    '10': 'ottobre',
    '11': 'novembre',
    '12': 'dicembre',
  },
  de: {
    '01': 'Januar',
    '02': 'Februar',
    '03': 'März',
    '04': 'April',
    '05': 'Mai',
    '06': 'Juni',
    '07': 'Juli',
    '08': 'August',
    '09': 'September',
    '10': 'Oktober',
    '11': 'November',
    '12': 'Dezember',
  },
  en: {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  },
};

export const dateTimeToFormat = (
  dt: DateTime,
  opts: {
    locale?: string,
    format: string,
  }
): string => {
  let format = '';
  switch (opts.format) {
    case 'datetime':
      format = `dd.MM.y HH${opts.locale === 'fr' ? "'h'" : ':'}mm`;
      break;
    case 'time':
      format = `HH${opts.locale === 'fr' ? "'h'" : ':'}mm`;
      break;
    case 'date':
      format = 'dd.MM.y';
      break;
    default:
      format = `dd.MM.y HH${opts.locale === 'fr' ? "'h'" : ':'}mm`;
      break;
  }
  return dt.toFormat(format);
};

export const dateTimeToLocaleString = (
  dt: DateTime,
  opts: {
    locale: string,
    format: string,
  }
): string => {
  let localDate = '';
  const day = dt.toFormat('dd');
  const month = localMonth[opts.locale][dt.toFormat('MM')];
  const year = dt.toFormat('y');
  switch (opts.format) {
    case 'datefull':
      switch (opts.locale) {
        case 'fr':
          // 25 janvier 2016
          localDate = `${day} ${month} ${year}`;
          break;
        case 'de':
          // 25. Januar 2016
          localDate = `${day}. ${month} ${year}`;
          break;
        case 'it':
          // 25 gennaio 2016
          localDate = `${day} ${month} ${year}`;
          break;
        case 'en':
          // January 25, 2016
          localDate = `${month} ${day}, ${year}`;
          break;
        default:
          break;
      }
      break;
    default:
      // January 25, 2016
      localDate = `${month} ${day}, ${year}`;
      break;
  }
  return localDate;
};
