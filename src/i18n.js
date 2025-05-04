// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import JSON translation files
import en from "./locales/en/translation.json";
import ar from "./locales/ar/translation.json";
import nl from "./locales/nl/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      nl: { translation: nl },
    },
    debug: true, // Enable debug to see what's happening with translations
  });

export default i18n;
