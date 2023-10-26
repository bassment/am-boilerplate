import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import englishTranslations from '../locales/en/translations';
import dutchTranslations from '../locales/nl/translations';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: englishTranslations,
      },
      nl: {
        translation: dutchTranslations,
      },
    },
  });

export default i18n;
