import { TOptionsBase } from 'i18next';
import { $Dictionary } from 'i18next/typescript/helpers';
import { useTranslation as useTranslationI18next } from 'react-i18next';
import { TranslationKey } from '@/i18n';

export default function useTranslation() {
  const { t, i18n } = useTranslationI18next();

  function setLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  function translate(key: TranslationKey, options?: TOptionsBase & $Dictionary) {
    return t(key, options);
  }

  return {
    translate,
    language: i18n.language,
    setLanguage
  };
}