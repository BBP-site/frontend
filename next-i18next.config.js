const path = require('path');

module.exports = {
  i18n: {
    locales: ['default', 'en'],
    defaultLocale: 'default',
    fallbackLng: 'default',
    ns: ['common'],
    defaultNS: 'common',
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
    keySeparator: false,
    nsSeparator: '|',
    interpolation: { escapeValue: false, formatSeparator: ',' },
    react: {
      wait: true,
      useSuspense: false,
    },
  },
};
