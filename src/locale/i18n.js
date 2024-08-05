import useAppStore from '@/stores/appStore';
import { createI18n } from 'vue-i18n';

import enUS from '@/locale/en.json';
import koKR from '@/locale/ko.json';
import { datetimeFormats, numberFormats } from '@/locale/i18nFormats';

// const appStore = useAppStore();

const i18n = createI18n({
  legacy: false, // composition api이면 legacy는 false
  locale: 'ko-KR',
  globalInjection: true,
  fallbackLocale: 'ko-KR',
  messages: {
    ko: koKR,
    en: enUS,
  },
  datetimeFormats: datetimeFormats,
  numberFormats: numberFormats,
});

export default i18n;
