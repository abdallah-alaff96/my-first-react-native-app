import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

// Import translations
import en from "./locales/en.json";
import ar from "./locales/ar.json";

// Set up i18next
i18n.use(initReactI18next).init({
  lng: Localization.locale, // Default language
  fallbackLng: "en", // Fallback language if locale is not found
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  compatibilityJSON: "v3", // Add compatibilityJSON option here
});

export default i18n;
