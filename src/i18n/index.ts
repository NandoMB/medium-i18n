import * as Localization from 'expo-localization';
import i18Next, { Resource, LanguageDetectorModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import useTranslation from './hooks/useTranslation';
import en from './translations/en.json';
import pt from './translations/pt.json';

export type TranslationKey = keyof typeof en;
export type LanguageCode = keyof typeof resources;

const resources = {
  en: { translation: en },
  pt: { translation: pt }
};

const i18NextInit = function (resources: Resource, fallbackLanguage: LanguageCode, initialLanguage?: LanguageCode) {
  const languages = Object.keys(resources);
  const fallbackLng = fallbackLanguage ?? languages[0];
  return i18Next
    .use(initReactI18next)
    .use({
      type: 'languageDetector',
      init: () => {},
      cacheUserLanguage: () => {},
      detect: () => initialLanguage ?? Localization.getLocales()[0].languageCode ?? languages[0]
    } as LanguageDetectorModule)
    .init({
      resources,
      fallbackLng,
      compatibilityJSON: 'v3',
      interpolation: {
        escapeValue: false
      }
    });
};

export { useTranslation };

export default i18NextInit(resources, 'en');
