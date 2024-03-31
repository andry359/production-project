import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // этот флаг нужен для того, чтобы сразу не подгружать все чанки с разными языками, при переключении языков, а подгружать только те чанки с языком, которые нужны только на этой странице! (или же сразу и перевод тех страниц, на которых уже был пользователь до этого)
    fallbackLng: false,
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false,
    },

    // плагин для того, что подтягивать переводы в разных чанках, а не все переводы вместе сразу
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;